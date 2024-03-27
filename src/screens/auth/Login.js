
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate(ROUTES.HOME)
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handleForgotPassword = () => {

    console.log('Forgot Password clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>Login to Access Your Account</Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Username / Email</Text>
        <TextInput
          style={styles.input}

          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}

          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',


    padding: 13,
  },
  containerTitle: {
    marginTop: 5,
    padding: 13
  },
  containerInput: {
    padding: 13,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: COLORS.gradientForm
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

  },
  label: {
    fontSize: 16,
    color: COLORS.black,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 7
  },
  forgotPasswordText: {

    textAlign: 'right',
    color: COLORS.dark

  },
  loginButton: {
    marginTop: 15,
    backgroundColor: COLORS.gray,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});


