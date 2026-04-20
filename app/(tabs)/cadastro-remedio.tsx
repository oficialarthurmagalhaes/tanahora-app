import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {Alert, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importe a configuração do Firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export default function App() {
  // 1. Estados separados para cada campo
  const [nome, setNome] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [intervalo, setIntervalo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimer.current) {
        clearTimeout(successTimer.current);
      }
    };
  }, []);

  const showMessage = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  // 2. Função para salvar no Firebase
  const handleCadastro = async () => {
    console.log("handleCadastro acionado", { nome, dosagem, intervalo });

    if (!nome || !dosagem || !intervalo) {
      showMessage("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      await addDoc(collection(db, "medicamentos"), {
        nome: nome,
        dosagem: dosagem,
        intervalo: intervalo,
        createdAt: new Date(),
      });

      console.log("Cadastro realizado com sucesso");
      setSuccessMessage("Medicamento cadastrado!");
      if (successTimer.current) {
        clearTimeout(successTimer.current);
      }
      successTimer.current = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      // Limpar campos
      setNome("");
      setDosagem("");
      setIntervalo("");
    } catch (e) {
      console.error("Erro ao adicionar: ", e);
      showMessage("Erro", "Não foi possível salvar o medicamento.");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Cabeçalho - Saudação e SOS */}
      <View style={styles.header}>
        <Link href={"/"}>
          <Ionicons name="arrow-back-outline" size={36} color="black" />
        </Link>
      </View>

      {/* Menu Principal */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <Text style={styles.label}>NOME DO MEDICAMENTO</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Dipirona"
          value={nome}
          onChangeText={setNome} // Atualiza o estado nome
        />
        <Text style={styles.label}>DOSAGEM</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 20mg"
          value={dosagem}
          onChangeText={setDosagem} // Atualiza o estado dosagem
        />
        <Text style={styles.label}>INTERVALO</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: De 8 em 8 horas"
          value={intervalo}
          onChangeText={setIntervalo} // Atualiza o estado intervalo
        />
        <TouchableOpacity
          style={styles.buttonCadastrar}
          onPress={handleCadastro}
        >
          <Text style={styles.text}>CADASTRAR MEDICAMENTO</Text>
          <Ionicons name="add-circle" size={24} color="#f0f0f0" />
        </TouchableOpacity>
        {successMessage ? (
          <View style={styles.successBox}>
            <Text style={styles.successText}>{successMessage}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#FFECC7",
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: "#E53935",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  sosText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 15,
  },
  greetingTitle: {
    fontSize: 28,
    color: "#333",
  },
  userName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  avatarPlaceholder: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#eee",
  },
  subGreeting: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    color: "#444",
  },
  menuList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#222",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: "60%",
    backgroundColor: "#333",
    opacity: 0.2,
  },
  label: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 1,
    alignItems: "center",
    elevation: 2,
    fontSize: 18,
    fontWeight: "800",
    color: "#222",
  },
  input: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    fontSize: 18,
  },
  buttonCadastrar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 15,
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  successBox: {
    marginTop: 12,
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  successText: {
    color: "#155724",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
