import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen() {
  const [firstname, setFirstname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {

    console.log('firstname:', firstname);
    console.log('mobileNumber:', mobileNumber);
    console.log('Password:', password);

  };


  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.welcomeText}>Create Your Account</Text>
        <Text style={styles.subText}>Welcome to Electro create Your Account to enjoy a personalized shopping Experiences</Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>Signup</Text>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>First Name</Text>


        <TextInput
          style={styles.input}

          keyboardType="firstname"
          autoCapitalize="none"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
        <Text style={styles.label}>Mobile Number</Text>


        <TextInput
          style={styles.input}

          keyboardType="mobileNumber"
          autoCapitalize="none"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}

          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />


        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 7
  },

  loginButton: {
    marginTop: 15,
    backgroundColor: '#ff4500',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});


