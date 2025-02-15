import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from '../components/SharedStyles';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

import Logo from "../assets/Logo.png";
import user from "../assets/user.png";
import pass from "../assets/password.png";
import ema from "../assets/email.png";
import date from "../assets/date.png";

function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const birthDateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  const handleRegister = async () => {
    // Check if all fields are filled
    if (
      email === '' ||
      username === '' ||
      password === '' ||
      confirmPassword === '' ||
      birthDate === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Check birth date format
    if (!birthDateRegex.test(birthDate)) {
      alert('Invalid birth date format. Please use dd/mm/yyyy.');
      return;
    }

    // Check email format
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }

    try {
      // Create user in Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user information to Firestore
      const userData = {
        email,
        username,
        birthDate,
      };

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, userData);

      console.log('User registered:', user);

      // Clear form fields
      setEmail('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setBirthDate('');

      navigation.navigate('Gotd');
    } catch (error) {
      alert('Error registering user: ' + error.message);
    }
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Text style={sharedStyles.title}>Register</Text>
      </View>
      <Image source={Logo} style={sharedStyles.logo} />
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={ema} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="Email Address"
          placeholderTextColor="#B49DCA"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={user} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="Username"
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
        />
      </View>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={pass} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#B49DCA"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={date} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="Birth Date"
          placeholderTextColor="#B49DCA"
          value={birthDate}
          onChangeText={setBirthDate}
        />
      </View>
      <View style={sharedStyles.buttonContainer}>
        <TouchableOpacity style={sharedStyles.button} onPress={handleCancel}>
          <Text style={sharedStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sharedStyles.button} onPress={handleRegister}>
          <Text style={sharedStyles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
