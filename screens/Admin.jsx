import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from '../components/SharedStyles';

const Admin = () => {
  const navigation = useNavigation();

  const handleGotd = () => {
    navigation.navigate('DefineGotd');
  };

  const handleLeagues = () => {
    navigation.navigate('DefinirLigas');
  };

  const handleOdds = () => {
    navigation.navigate('TiposDeAposta');
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Text style={sharedStyles.title}>Admin</Text>
      </View>
      <TouchableOpacity style={sharedStyles.button} onPress={handleGotd}>
        <Text style={sharedStyles.buttonText}>Manage Gotd</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={handleLeagues}>
        <Text style={sharedStyles.buttonText}>Manage Leagues</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={handleOdds}>
        <Text style={sharedStyles.buttonText}>Manage Odds</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Admin;
