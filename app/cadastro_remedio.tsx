import React, { useState } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';


export default function App() {
    const [text, setText] = useState('');
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
            onChangeText={newText => setText(newText)}
            defaultValue={""}
        />
        <Text style={styles.label}>DOSAGEM</Text>
        <TextInput
            style={styles.input}
            placeholder="Ex: 20mg"
            onChangeText={newText => setText(newText)}
            defaultValue={""}
        />
        <Text style={styles.label}>INTERVALO</Text>
        <TextInput
            style={styles.input}
            placeholder="Ex: De 8 em 8 horas"
            onChangeText={newText => setText(newText)}
            defaultValue={""}
        />
        <TouchableOpacity style={styles.buttonCadastrar}>
            <Text style={styles.text}>CADASTRAR MEDICAMENTO</Text>
            <Ionicons name="add-circle" size={24} color="#f0f0f0" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFECC7',
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: '#E53935',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  sosText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 15,
  },
  greetingTitle: {
    fontSize: 28,
    color: '#333',
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  avatarPlaceholder: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#eee',
  },
  subGreeting: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#444',
  },
  menuList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#222',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#333',
    opacity: 0.2,
  },
  label: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 1,
    alignItems: 'center',
    elevation: 2,
    fontSize: 18,
    fontWeight: '800',
    color: '#222',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
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
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});