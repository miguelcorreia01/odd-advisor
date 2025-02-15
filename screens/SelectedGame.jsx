import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { sharedStyles } from '../components/SharedStyles';

function SelectedGame({ route }) {
  const { gameId, selectedSport } = route.params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameOdds = async () => {
      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${selectedSport}/odds?regions=us&oddsFormat=american&apiKey=512da81c165b87a3ac5ee654e907a436`);
        const gameData = response.data;

        const selectedGame = gameData.find((game) => game.id === gameId);


        setGame(selectedGame);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchGameOdds();
  }, [selectedSport, gameId]);

  return (
    <View style={sharedStyles.container}>
      <View style={styles.bar}>
        <Text style={styles.title}>Selected Game</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.gameContainer}>
        {game ? (
          <View>
            <Text>Game ID: {game.id}</Text>
            <Text>Sport: {game.sport_title}</Text>
            <Text>Commence Time: {game.commence_time}</Text>
            <Text>Home Team: {game.home_team}</Text>
            <Text>Away Team: {game.away_team}</Text>
            <Text>Bookmakers:</Text>
            {game.bookmakers.map((bookmaker) => (
              <View key={bookmaker.key}>
                <Text>Bookmaker: {bookmaker.title}</Text>
                <Text>Last Update: {bookmaker.last_update}</Text>
                <Text>Markets:</Text>
                {bookmaker.markets.map((market) => (
                  <View key={market.key}>
                    <Text>Market: {market.key}</Text>
                    <Text>Last Update: {market.last_update}</Text>
                    <Text>Outcomes:</Text>
                    {market.outcomes.map((outcome) => (
                      <View key={outcome.name}>
                        <Text>Outcome: {outcome.name}</Text>
                        <Text>Price: {outcome.price}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        ) : (
          <Text>Loading game data...</Text>
        )}
      </View>
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
  gameContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
};

export default SelectedGame;