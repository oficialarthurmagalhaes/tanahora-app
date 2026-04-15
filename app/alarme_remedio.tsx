import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AlarmScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Horário e Título */}
      <View style={styles.header}>
        <Text style={styles.clockText}>12:00</Text>
        <Text style={styles.subtitle}>PRÓXIMO REMÉDIO</Text>
      </View>

      {/* Card do Medicamento */}
      <View style={styles.card}>
        <Text style={styles.medName}>ANLODIPINO</Text>
        
        <View style={styles.imageContainer}>
          {/* Representação visual da caixa e comprimido */}
          <MaterialCommunityIcons name="package-variant" size={80} color="#5C6BC0" />
          <MaterialCommunityIcons name="pill" size={80} color="#D1D1D1" />
        </View>

        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Tomar 1 comprimido de <Text style={styles.boldText}>5mg.</Text>
          </Text>
          <Text style={styles.medicalAdvice}>
            Siga a orientação do seu médico.
          </Text>
        </View>
      </View>

      {/* Área do Slide para Confirmar */}
      <View style={styles.slideArea}>
        <Text style={styles.slideInstructions}>
          DESLIZE PARA CONFIRMAR QUE TOMOU →
        </Text>
        
        <View style={styles.track}>
          <View style={styles.thumb}>
            <MaterialCommunityIcons name="chevron-right" size={30} color="#5C6BC0" />
          </View>
        </View>
      </View>

      {/* Ilustração da Mão (Simulada com ícone ou placeholder) */}
      <View style={styles.handContainer}>
         <FontAwesome5 name="hand-holding" size={100} color="#F5CBA7" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BBD0', // Rosa claro do fundo
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
  },
  clockText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
    marginTop: -10,
  },
  card: {
    backgroundColor: 'white',
    width: width * 0.85,
    borderRadius: 25,
    padding: 30,
    marginTop: 40,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  medName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3949AB', // Azul escuro
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  instructionContainer: {
    marginTop: 10,
  },
  instructionText: {
    fontSize: 24,
    color: '#000',
    lineHeight: 32,
  },
  boldText: {
    fontWeight: 'bold',
  },
  medicalAdvice: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  slideArea: {
    marginTop: 'auto',
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  slideInstructions: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  track: {
    width: width * 0.8,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 5,
  },
  thumb: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  handContainer: {
    position: 'absolute',
    bottom: -20,
    right: 20,
    opacity: 0.6,
  }
});