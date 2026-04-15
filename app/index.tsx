import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header - Saudação e SOS */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
          <MaterialCommunityIcons name="plus-circle" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingTitle}>Bom Dia,</Text>
          <Text style={styles.userName}>Eva!</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
           <FontAwesome5 name="user-circle" size={60} color="#D1D1D1" />
        </View>
      </View>

      <Text style={styles.subGreeting}>Olá, Eva! Tudo pronto para hoje?</Text>

      {/* Lista de Opções Principais */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuButton 
          title="MEUS REMÉDIOS" 
          subtitle="Horários e doses para tomar." 
          icon="pill" 
          color="#E1F5FE"
          iconColor="#0288D1"
        />
        <MenuButton 
          title="MINHAS RECEITAS" 
          subtitle="Suas prescrições e contatos médicos." 
          icon="file-document-outline" 
          color="#E8F5E9"
          iconColor="#388E3C"
        />
        <MenuButton 
          title="CALENDÁRIO" 
          subtitle="Próximas consultas e lembretes." 
          icon="calendar-month" 
          color="#FFF9C4"
          iconColor="#FBC02D"
        />
        <MenuButton 
          title="FALAR COM ATENDENTE" 
          subtitle="Dúvidas e ajuda em tempo real." 
          icon="headset" 
          color="#F3E5F5"
          iconColor="#7B1FA2"
        />
      </ScrollView>

      {/* Footer - Atividade e Água */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
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

// Componente de Botão Customizado
const MenuButton = ({ title, subtitle, icon, color, iconColor }: { title: string; subtitle: string; icon: keyof typeof MaterialCommunityIcons.glyphMap; color: string; iconColor: string; }) => (
  <TouchableOpacity style={styles.card}>
    <View style={[styles.iconContainer, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={icon} size={40} color={iconColor} />
    </View>
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

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
  footer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#FFD180',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#333',
    opacity: 0.2,
  },
});