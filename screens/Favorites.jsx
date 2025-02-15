import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView , FlatList} from "react-native";
import { sharedStyles } from '../components/SharedStyles';

import menu from "../assets/menu.png";
import arrowr from "../assets/arrowright.png";
import city from "../assets/clubs/city.png";
import liverpool from "../assets/clubs/liverpool.png";
import nuggets from "../assets/clubs/nuggets.png";
import lakers from "../assets/clubs/lakers.png";
import celtics from "../assets/clubs/celtics.png";
import raptors from "../assets/clubs/raptors.png";
import star from "../assets/star.png";
import starfill from "../assets/starfill.png";
import porto from "../assets/clubs/porto.png";
import benfica from "../assets/clubs/benfica.png";
import football from "../assets/football.png";
import basketball from "../assets/basketball.png";
import { useNavigation } from '@react-navigation/native';


function Favorites() {
  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Image source={menu} style={sharedStyles.headerIcon} />
        <Text style={sharedStyles.headerTitle}>Favorites</Text>
      </View>

      <ScrollView style={{ width: '100%' }}>
        <View style={[sharedStyles.button, { marginTop: 120 }]}>
          <Text style={[sharedStyles.buttonText, { flex: 1 }]}>Today</Text>
          <Image source={arrowr} style={{ tintColor: 'black', marginRight: 20 }} />
        </View>

        <View style={[sharedStyles.button, { marginTop: 10 }]}>
          <View style={sharedStyles.square}>
            <Image source={football} style={{ tintColor: 'white' }} />
          </View>
          <Text style={[sharedStyles.buttonText, { flex: 1 }]}>Football</Text>
        </View>

        <GameCard
          leftTeam={{ image: city, name: "Man. City" }}
          rightTeam={{ image: liverpool, name: "Liverpool" }}
          time="20:00"
          favorite={true}
        />

        <GameCard
          leftTeam={{ image: benfica, name: "Benfica" }}
          rightTeam={{ image: porto, name: "Porto" }}
          time="20:00"
          favorite={true}
        />

        <View style={[sharedStyles.button, { marginTop: 10 }]}>
          <View style={sharedStyles.square}>
            <Image source={basketball} style={{ tintColor: 'white' }} />
          </View>
          <Text style={[sharedStyles.buttonText, { flex: 1 }]}>Basketball</Text>
        </View>

        <GameCard
          leftTeam={{ image: nuggets, name: "Nuggets" }}
          rightTeam={{ image: lakers, name: "Lakers" }}
          time="20:00"
          favorite={true}
        />

        <GameCard
          leftTeam={{ image: celtics, name: "Celtics" }}
          rightTeam={{ image: raptors, name: "Raptors" }}
          time="20:00"
          favorite={false}
        />
      </ScrollView>
    </View>
  );
}

const GameCard = ({ leftTeam, rightTeam, time, favorite }) => (
  <View style={sharedStyles.game}>
    <Image 
      source={favorite ? starfill : star} 
      style={[sharedStyles.favoriteIcon, { left: 5, tintColor: favorite ? 'yellow' : undefined }]}
    />
    <Image source={leftTeam.image} style={sharedStyles.leftImage} resizeMode="contain" />
    <Text style={{ fontSize: 15, marginTop: -25, textAlign: 'center', flex: 1 }}>{time}</Text>
    <Text style={sharedStyles.gameText}>{leftTeam.name} x {rightTeam.name}</Text>
    <Image source={rightTeam.image} style={sharedStyles.rightImage} resizeMode="contain" />
    <Image 
      source={favorite ? star : starfill} 
      style={[sharedStyles.favoriteIcon, { right: 5, tintColor: favorite ? undefined : 'yellow' }]}
    />
  </View>
);

export default Favorites;