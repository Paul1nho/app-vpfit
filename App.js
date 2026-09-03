import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Garante que a barra de status do celular fique legível no fundo escuro */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Image 
          source={require('./logoVPFIT.jpg')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.headerSubtitle}>SISTEMA DE GESTÃO</Text>
      </View>

      {/* CONTEÚDO CENTRAL */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Painel do Gestor</Text>
          <Text style={styles.description}>
            Acompanhe métricas financeiras, gerencie cadastros de alunos, controle mensalidades e identifique pendências em tempo real.
          </Text>
        </View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Sobre Nós</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo grafite/preto moderno
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  logo: {
    width: 220,
    height: 110,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#E53935', // Vermelho destaque
    marginTop: 6,
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#1E1E1E', // Cartão com tom ligeiramente mais claro para contraste
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#B0B0B0',
    lineHeight: 22,
  },
  footer: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#222222',
    backgroundColor: '#121212',
  },
  buttonPrimary: {
    flex: 1,
    backgroundColor: '#E53935', // Vermelho VPFIT
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  buttonSecondary: {
    flex: 1,
    backgroundColor: '#2A2A2A', // Cinza escuro para o botão secundário
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonTextSecondary: {
    color: '#E0E0E0',
    fontWeight: '600',
    fontSize: 15,
  },
});
