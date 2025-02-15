import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

import { sharedStyles } from '../components/SharedStyles'; // Import shared styles
import Logo from "../assets/Logo.png";
import ema from "../assets/email.png";
import pass from "../assets/password.png";

function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Please enter your username and password');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      navigation.navigate('Gotd');
    } catch (error) {
      Alert.alert('Error logging in', error.message);
    }
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Text style={sharedStyles.title}>Log In</Text>
      </View>
      <Image source={Logo} style={sharedStyles.logo} />
      
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={ema} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="Email"
          placeholderTextColor="#B49DCA"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={pass} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="Password"
          placeholderTextColor="#B49DCA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={sharedStyles.buttonContainer}>
        <TouchableOpacity style={sharedStyles.button} onPress={handleCancel}>
          <Text style={sharedStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sharedStyles.button} onPress={handleLogin}>
          <Text style={sharedStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
