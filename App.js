import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';

// Dados Simulados 
const alunosMock = [
  { id: '1', nome: 'Carlos Silva', plano: 'Anual', status: 'Ativo' },
  { id: '2', nome: 'Amanda Nunes', plano: 'Mensal', status: 'Pendente' },
  { id: '3', nome: 'Roberto Souza', plano: 'Semestral', status: 'Inativo' },
  { id: '4', nome: 'Juliana Paes', plano: 'Anual', status: 'Ativo' },
];

export default function App() {
  const [telaAtual, setTelaAtual] = useState('welcome');

  const navegarPara = (tela) => setTelaAtual(tela);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#050505" />
      {telaAtual === 'welcome' && <WelcomeScreen onNavigate={navegarPara} />}
      {telaAtual === 'login' && <LoginScreen onNavigate={navegarPara} />}
      {telaAtual === 'recovery' && <RecoveryScreen onNavigate={navegarPara} />}
      {telaAtual === 'dashboard' && <DashboardScreen onNavigate={navegarPara} />}
    </SafeAreaView>
  );
}

// --- 1. TELA DE BOAS VINDAS ---
function WelcomeScreen({ onNavigate }) {
  return (
    <View style={styles.containerCenter}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('./assets/LogoVPFIT.jpg')} 
          style={styles.logoImage} 
          resizeMode="contain"
        />
        <Text style={styles.brandTitle}>VPFIT</Text>
        <Text style={styles.brandSubtitle}>GESTÃO DE ACADEMIA</Text>
      </View>
      
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => onNavigate('login')}>
          <Text style={styles.buttonText}>Acessar Sistema</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => alert('Suporte: suporte@vpfit.com')}>
          <Text style={styles.buttonSecondaryText}>Preciso de Suporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// --- 2. TELA DE LOGIN ---
function LoginScreen({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    if (email !== '' && senha !== '') {
      onNavigate('dashboard');
    } else {
      alert('Por favor, preencha o e-mail e a senha do admin.');
    }
  };

  return (
    <View style={styles.containerCenter}>
      <View style={styles.floatingCard}>
        <Text style={styles.title}>Acesso Restrito</Text>
        <Text style={styles.subtitle}>Faça login com sua conta de administrador</Text>
        
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="✉️  E-mail" 
            placeholderTextColor="#777777"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput 
            style={styles.input} 
            placeholder="🔒  Senha" 
            placeholderTextColor="#777777"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          
          <TouchableOpacity onPress={() => onNavigate('recovery')} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonPrimary} onPress={fazerLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGhost} onPress={() => onNavigate('welcome')}>
            <Text style={styles.buttonGhostText}>Voltar ao Início</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// --- 3. TELA DE RECUPERAÇÃO DE SENHA ---
function RecoveryScreen({ onNavigate }) {
  return (
    <View style={styles.containerCenter}>
      <View style={styles.floatingCard}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.subtitle}>Enviaremos as instruções de recuperação para o seu e-mail.</Text>
        
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="✉️  E-mail cadastrado" 
            placeholderTextColor="#777777"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
            alert('Link de recuperação enviado com sucesso!');
            onNavigate('login');
          }}>
            <Text style={styles.buttonText}>Enviar Link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGhost} onPress={() => onNavigate('login')}>
            <Text style={styles.buttonGhostText}>Voltar para o Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// --- 4. TELA DO DASHBOARD GERENCIAL ---
function DashboardScreen({ onNavigate }) {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.miniLogo}><Text style={styles.miniLogoText}>V</Text></View>
          <Text style={styles.headerTitle}>VPFIT Admin</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => onNavigate('welcome')}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>👨‍👩‍👧‍‍👦 Visão Geral de Alunos e Funcionários</Text>
        
        <View style={styles.row}>
          <View style={[styles.card, styles.cardFeatured]}>
            <Text style={styles.cardLabelFeatured}>Total Matriculados</Text>
            <Text style={styles.cardValueFeatured}>450</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>🟢 Ativos</Text>
            <Text style={styles.cardValue}>380</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>🔴 Inativos</Text>
            <Text style={styles.cardValue}>70</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>💰 Financeiro Mensal</Text>
        
        <View style={styles.row}>
          <View style={[styles.card, styles.cardFeatured]}>
            <Text style={styles.cardLabelFeatured}>Receita Mensal</Text>
            <Text style={styles.cardValueFeatured}>R$ 45.000</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>✅ Pagas</Text>
            <Text style={styles.cardValue}>350</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>⏳ Pendentes</Text>
            <Text style={styles.cardValueAlert}>30</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>📉 Despesas</Text>
            <Text style={styles.cardValueAlert}>R$ 8.500</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>🧑‍💼 Funcionários</Text>
            <Text style={styles.cardValueAlert}>R$ 12.000</Text>
          </View>
        </View>

        {/* --- NOVA SEÇÃO: LISTA DINÂMICA OPERACIONAL --- */}
        <Text style={styles.sectionTitle}>📋 Lista Recente de Alunos</Text>
        
        {alunosMock.map((aluno) => (
          <View key={aluno.id} style={styles.listItem}>
            <View>
              <Text style={styles.listName}>{aluno.nome}</Text>
              <Text style={styles.listPlan}>Plano {aluno.plano}</Text>
            </View>
            <View style={[
              styles.statusBadge, 
              aluno.status === 'Ativo' ? styles.badgeActive : 
              aluno.status === 'Pendente' ? styles.badgeWarning : styles.badgeInactive
            ]}>
              <Text style={styles.badgeText}>{aluno.status}</Text>
            </View>
          </View>
        ))}
        
        <View style={{height: 50}} />
      </ScrollView>
    </View>
  );
}

// --- ESTILIZAÇÃO TEMA ESCURO (VERMELHO E PRETO) E LISTAS ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050505', 
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#050505',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF', 
    letterSpacing: 2,
  },
  brandSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#990000', 
    letterSpacing: 4,
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0', 
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  floatingCard: {
    backgroundColor: '#121212', 
    width: '100%',
    borderRadius: 24,
    padding: 25,
    borderWidth: 1,
    borderColor: '#2A0000', 
    shadowColor: '#990000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  actionContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#0A0A0A', 
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#FF4D4D', 
    fontWeight: '700',
    fontSize: 14,
  },
  buttonPrimary: {
    backgroundColor: '#8B0000', 
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#8B0000', 
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#FF4D4D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGhost: {
    alignItems: 'center',
    padding: 10,
  },
  buttonGhostText: {
    color: '#A0A0A0',
    fontSize: 15,
    fontWeight: '600',
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#050505',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderBottomColor: '#2A0000',
  },
  miniLogo: {
    width: 32,
    height: 32,
    backgroundColor: '#8B0000',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  miniLogoText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  logoutButton: {
    backgroundColor: '#2A0000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  logoutText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
    fontSize: 14,
  },
  scrollArea: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#121212', 
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#8B0000', 
  },
  cardFeatured: {
    marginHorizontal: 0,
    alignItems: 'center',
    backgroundColor: '#8B0000', 
    borderLeftWidth: 0,
  },
  cardLabel: {
    fontSize: 13,
    color: '#A0A0A0',
    marginBottom: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardLabelFeatured: {
    fontSize: 13,
    color: '#FFCCCC',
    marginBottom: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  cardValueFeatured: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  cardValueAlert: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF4D4D', 
  },
  // Estilos da Lista Dinâmica
  listItem: {
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2A0000',
  },
  listName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listPlan: {
    color: '#A0A0A0',
    fontSize: 12,
    marginTop: 4,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  badgeActive: { backgroundColor: '#004d00' }, 
  badgeWarning: { backgroundColor: '#b35900' }, 
  badgeInactive: { backgroundColor: '#8B0000' }, 
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
