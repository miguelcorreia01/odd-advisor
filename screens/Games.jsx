import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from '../components/SharedStyles';

function Games({ navigation, route }) {
  const { selectedSport, bets } = route.params;

  const handleGameSelection = (gameId, selectedSport) => {
    navigation.navigate('SelectedGame', { gameId, selectedSport });
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Text style={sharedStyles.headerTitle}>{selectedSport}</Text>
      </View>
      
      <ScrollView contentContainerStyle={sharedStyles.scrollViewContent}>
        {bets && bets.length > 0 ? (
          bets.map((game) => (
            <View key={game.id} style={{ alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>
                {game.commence_time}
              </Text>
              <TouchableOpacity 
                style={sharedStyles.button}
                onPress={() => handleGameSelection(game.id, selectedSport)}
              >
                <Text style={sharedStyles.gameText}>
                  {game.home_team} x {game.away_team}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={sharedStyles.text}>No upcoming games</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default Games;