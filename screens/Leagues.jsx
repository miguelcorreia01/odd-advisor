import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { sharedStyles } from '../components/SharedStyles';

import axios from "axios";

import arrow from "../assets/arrow.png";
import prem from "../assets/leagues/eng.png";
import eng from "../assets/leagues/england.png";
import laliga from "../assets/leagues/laliga.png";
import spain from "../assets/leagues/spain.png";
import bundesl from "../assets/leagues/ger.png";
import ger from "../assets/leagues/germany.png";
import seriea from "../assets/leagues/seriaa.png";
import ita from "../assets/leagues/italy.png";
import ligue1 from "../assets/leagues/ligue1.png";
import france from "../assets/leagues/france.png";
import pt from "../assets/leagues/ptt.png";
import lpt from "../assets/leagues/pt.png";


import { fetchUpcomingGames } from "../oddsAPI";

function Leagues({ selectedSport }) {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetchUpcomingGames(selectedSport);
        const leaguesData = response.data;
        const leaguesTitles = leaguesData.map((league) => league.title);
        setLeagues(leaguesTitles);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchLeagues();
  }, [selectedSport]);

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Image source={arrow} style={sharedStyles.headerIcon} />
        <Text style={sharedStyles.headerTitle}>Leagues</Text>
      </View>

      <ScrollView contentContainerStyle={[sharedStyles.scrollViewContent, { marginTop: 100 }]}>
        {leagues.map((league) => (
          <TouchableOpacity key={league} style={sharedStyles.button}>
            <Text style={[sharedStyles.buttonText, { flex: 1 }]}>{league}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Leagues;