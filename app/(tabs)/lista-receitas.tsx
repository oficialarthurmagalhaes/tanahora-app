import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";


// Importe sua configuração
import { collection, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Interface para TypeScript (opcional, mas recomendado)
interface Receita {
  id: string;
  nomeMedico: string;
  crm: string;
  especialidade: string;
  medicamentos: string;
  paciente: string;
  data: string;
}

export default function ListaReceitas() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [loading, setLoading] = useState(true);
  
  //Para utilizar a navegação entre telas
  const router = useRouter();
  //Para utilizar a navegação para a tela anterior
  const navigation = useNavigation();

  useEffect(() => {
    // Criamos uma consulta ordenada pela data de criação (se você salvou createdAt)
    const q = query(collection(db, "receitas"), orderBy("createdAt", "desc"));

    // Listener em tempo real
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lista: Receita[] = [];
      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() } as Receita);
      });
      
      setReceitas(lista);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar receitas:", error);
      setLoading(false);
    });

    return () => unsubscribe(); // Desativa o listener ao sair da tela
  }, []);

  const renderItem = ({ item }: { item: Receita }) => (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: "#E3F2FD" }]}>
        <FontAwesome5 name="file-medical" size={30} color="#1976D2" />
      </View>

      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>Dr.{item.nomeMedico}</Text>
        <Text style={styles.cardSubtitle}>{item.especialidade}</Text>
        
        <View style={styles.infoRow}>
          <Fontisto name="date" size={14} color="#666" />
          <Text style={styles.infoText}> - {item.data}</Text>
        </View>

        <View style={styles.infoRow}>
            <Text style={styles.infoText}>Medicamentos: {item.medicamentos}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>MINHAS RECEITAS</Text>
        
        <TouchableOpacity style={styles.botaoCadastrarRemedio} onPress={() => router.navigate('/(tabs)/cadastro-remedio')}>
          <MaterialCommunityIcons name="plus-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#E53935" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={receitas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum medicamento cadastrado.</Text>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FA" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#FFECC7",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
  listContent: { padding: 20 },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  botaoCadastrarRemedio: {
    backgroundColor: "#E53935",
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardTextContainer: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  cardSubtitle: { fontSize: 14, color: "#666", marginTop: 2 },
  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  infoText: { fontSize: 13, color: "#888" },
  emptyText: { textAlign: "center", marginTop: 50, color: "#999", fontSize: 16 }
});