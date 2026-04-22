import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Firebase
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

interface Exercicio {
  id: string;
  nome: string;
  duracaoReps: string; // Ex: "15min" ou "10 reps"
  descricao: string;
  concluido?: boolean;
}

export default function ListaExercicios() {
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    // Buscando da coleção de exercícios
    const q = query(collection(db, "exercicios"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lista: Exercicio[] = [];
      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() } as Exercicio);
      });
      setExercicios(lista);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar exercícios:", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const toggleExercicio = async (item: Exercicio) => {
    try {
      const docRef = doc(db, "exercicios", item.id);
      await updateDoc(docRef, { concluido: !item.concluido });
    } catch (e) {
      console.error("Erro ao atualizar status:", e);
    }
  };

  const renderItem = ({ item }: { item: Exercicio }) => (
    <View style={styles.cardItem}>
      <TouchableOpacity onPress={() => toggleExercicio(item)} style={styles.checkContainer}>
        <Ionicons 
          name={item.concluido ? "checkmark-circle" : "ellipse-outline"} 
          size={35} 
          color={item.concluido ? "#4CAF50" : "#333"} 
        />
      </TouchableOpacity>
      
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{item.nome} <Text style={styles.cardDetail}>({item.duracaoReps})</Text></Text>
        <Text style={styles.cardSubtitle}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Header mantendo o estilo de saudação, mas para Exercícios */}
<View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>MEUS EXERCÍCIOS</Text>
        
        <TouchableOpacity style={styles.botaoCadastrarRemedio} onPress={() => router.navigate('/')}>
          <MaterialCommunityIcons name="plus" size={50} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subGreeting}>Sua rotina de hoje:</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#E53935" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={exercicios}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum exercício para hoje.</Text>
          }
        />
      )}
      {/* RODAPÉ IDÊNTICO À SUA HOME */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerItem} 
          onPress={() => router.navigate('/(tabs)/lista-atividades')}
        >
          <FontAwesome5 name="dumbbell" size={28} color="black" />
          <Text style={styles.footerText}>ATIVIDADE</Text>
        </TouchableOpacity>

        <View style={styles.divider} />
        
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="water-outline" size={30} color="black" />
          <Text style={styles.footerText}>ÁGUA</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 10,
    backgroundColor: "#FFECC7",
    paddingBottom: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25},
    headerTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
    sosButton: {
    backgroundColor: "#E53935",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
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
  sosText: { color: "white", fontWeight: "bold", fontSize: 16 },
  greetingContainer: { flex: 1, marginLeft: 15 },
  greetingTitle: { fontSize: 22, color: "#333" },
  userName: { fontSize: 26, fontWeight: "bold", color: "#333" },
  backCircle: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  subGreeting: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 15,
    color: "#444",
    fontWeight: "500",
  },
  listContent: { paddingHorizontal: 20, paddingBottom: 160 },
  cardItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  checkContainer: { marginRight: 15 },
  cardTextContainer: { flex: 1 },
  cardTitle: { fontSize: 17, fontWeight: "bold", color: "#222" },
  cardDetail: { fontWeight: "normal", color: "#555" },
  cardSubtitle: { fontSize: 14, color: "#777", marginTop: 2 },
  emptyText: { textAlign: "center", marginTop: 50, color: "#999" },
  
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    zIndex: 10
  },
  floatingButton: {
    backgroundColor: '#7DB37D',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 3,
  },
  floatingButtonText: { color: 'white', fontWeight: 'bold', fontSize: 15 },

  // RODAPÉ LARANJA (IDÊNTICO À HOME)
  footer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#FFD180", // Laranja da Home
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  footerItem: { flex: 1, alignItems: "center", justifyContent: "center" },
  footerText: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  divider: { width: 1, height: "60%", backgroundColor: "#333", opacity: 0.2 },
});