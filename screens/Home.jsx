import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/Logo.png';
import { sharedStyles } from '../components/SharedStyles';

const Home = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleFreeAccess = () => {
    navigation.navigate('Gotd2');
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Text style={sharedStyles.title}>Bem vindo</Text>
      </View>
      <Image source={Logo} style={sharedStyles.logo} />
      <TouchableOpacity style={sharedStyles.button} onPress={handleLogin}>
        <Text style={sharedStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={handleRegister}>
        <Text style={sharedStyles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={handleFreeAccess}>
        <Text style={sharedStyles.buttonText}>Free Access</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Home;
