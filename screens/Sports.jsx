import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { sharedStyles } from '../components/SharedStyles';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderBar from "../components/HeaderBar";
import SportButton from "../components/SportButton";
import ContainerWrapper from "../components/ContainerWrapper";

function Sports() {
  const navigation = useNavigation();
  const [selectedSport, setSelectedSport] = useState(null);

  const sports = [
    { name: 'Football', image: require('../assets/football.png'), group: 'Soccer' },
    { name: 'Basketball', image: require('../assets/basketball.png'), group: 'Basketball' },
    { name: 'American Football', image: require('../assets/af.png'), group: 'americanfootball_nfl' },
    { name: 'Ice Hockey', image: require('../assets/mma.png'), group: 'icehockey_nhl' },
    { name: 'MMA', image: require('../assets/mma.png'), group: 'mma_mixed_martial_arts' },

  ];

  const handleSportSelection = async (sport) => {
    try {

    const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport.group}/odds?regions=us&oddsFormat=american&apiKey=512da81c165b87a3ac5ee654e907a436`);
    const games = response.data;

    navigation.navigate('Games', { selectedSport: sport.group, bets: games });
  } catch (error) {
    console.log('Error:', error);
  }
};

  return (
    <View style={sharedStyles.container}>
      <View style={styles.bar}>
        <Text style={styles.title}>Sports</Text>
        <View style={styles.placeholder} />
      </View>
      <ScrollView>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport.name}
            style={styles.button}
            onPress={() => handleSportSelection(sport)}
          >
            <View style={styles.square}>
              <Image
                source={sport.image}
                style={{ borderRadius: 12, tintColor: 'white' }}
              />
            </View>
            <Text style={[styles.buttonText, { flex: 1, justifyContent: 'center' }]}>
              {sport.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = {
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
    backgroundColor: '#363E8D',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  square: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#333',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Sports;