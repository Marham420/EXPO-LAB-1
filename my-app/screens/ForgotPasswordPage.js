import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

const TextInputCustom = ({ name, color, onChangeText, value }) => (
  <TextInput
    placeholder={` ${name}`}
    style={{
      borderColor: 'gray',
      width: '90%',
      borderWidth: 1, 
      borderRadius: 10,
      height: 64,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: color,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowRadius: 1,
      shadowOpacity: 0.2,
      fontSize: 15,
    }}
    onChangeText={onChangeText}
    value={value}
  />
);

const ButtonCustom = ({ color, text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ width: '90%', alignItems: 'center', marginBottom: 15 }}>
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowRadius: 1,
      shadowOpacity: 0.2,
      elevation: 3,
    }}>
      <Text style={{
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
      }}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Simulasi proses reset kata sandi
    Alert.alert('Success', 'Instruksi untuk reset kata sandi telah dikirim ke email Anda.');
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
          <Text style={{ fontSize: 24, color: '#444444', marginBottom: 20 }}>Reset Kata Sandi</Text>

          <TextInputCustom name='Masukkan email Anda' color='#666666' onChangeText={setEmail} value={email} />

          <ButtonCustom color='#444444' text='Reset Kata Sandi' onPress={handleResetPassword} />

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
            <Text style={{ color: '#444444', fontSize: 16 }}>Kembali ke Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default ForgotPasswordScreen;
