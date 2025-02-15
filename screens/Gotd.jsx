import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView , FlatList} from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { sharedStyles } from '../components/SharedStyles';

import menu from "../assets/menu.png";
import pt from "../assets/leagues/ptt.png";
import lpt from "../assets/leagues/pt.png";
import star from "../assets/star.png";
import porto from "../assets/clubs/porto.png";
import benfica from "../assets/clubs/benfica.png";
import bet365 from "../assets/houses/bet365.png";
import betclic from "../assets/houses/betclic.png";





function Gotd() {
  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Image source={menu} style={sharedStyles.headerIcon} />
        <Text style={sharedStyles.headerTitle}>Game of the day</Text>
      </View>

      <ScrollView style={{ width: '100%', paddingTop: 120 }}>
        <View style={sharedStyles.button}>
          <Image source={lpt} style={sharedStyles.leftImage} resizeMode="contain" />
          <Text style={[sharedStyles.buttonText, { flex: 1 }]}>Liga Portugal</Text>
          <Image source={pt} style={sharedStyles.rightImage} />
        </View>

        <View style={[sharedStyles.game, { height: 150 }]}>
          <Image source={star} style={[sharedStyles.favoriteIcon, { left: 5 }]} />
          <Image source={benfica} style={sharedStyles.leftImage} />
          <Text style={{ fontSize: 15, marginTop: -50, textAlign: 'center' }}>20:00</Text>
          <Text style={sharedStyles.gameText}>Benfica x Porto</Text>
          <Image source={porto} style={sharedStyles.rightImage} resizeMode="contain" />
          <Image source={star} style={[sharedStyles.favoriteIcon, { right: 5 }]} />
        </View>

        <OddsSection title="Best odds" />
        <BetTypeSection title="Resultado (Tempo Regulamentar)" />
        <OddsDisplay 
          bookmakers={[
            {
              logo: bet365,
              odds: [
                { label: "Benfica", value: "2.12" },
                { label: "Empate", value: "3.15" },
                { label: "Porto", value: "2.86" }
              ]
            },
            {
              logo: betclic,
              odds: [
                { label: "Benfica", value: "2.07" },
                { label: "Empate", value: "3.00" },
                { label: "Porto", value: "2.78" }
              ]
            }
          ]}
        />

        <BetTypeSection title="Ambas marcam" />
        <OddsDisplay 
          bookmakers={[
            {
              logo: bet365,
              odds: [
                { label: "Sim", value: "2.00" },
                { label: "Não", value: "2.50" }
              ]
            },
            {
              logo: betclic,
              odds: [
                { label: "Sim", value: "1.84" },
                { label: "Não", value: "2.00" }
              ]
            }
          ]}
        />
      </ScrollView>
    </View>
  );
}

const OddsSection = ({ title }) => (
  <View style={{
    backgroundColor: "#363E8D",
    width: 150,
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{title}</Text>
  </View>
);

const BetTypeSection = ({ title }) => (
  <View style={{
    backgroundColor: "#363E8D",
    width: "100%",
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{title}</Text>
  </View>
);

const OddsDisplay = ({ bookmakers }) => (
  <View style={{
    backgroundColor: "#E8E3E3",
    width: "100%",
    padding: 10,
    marginTop: 20,
  }}>
    {bookmakers.map((bookmaker, index) => (
      <View key={index} style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Image source={bookmaker.logo} style={{ width: 80, height: 50, marginRight: 20 }} resizeMode="contain" />
        <View style={{ flexDirection: 'row' }}>
          {bookmaker.odds.map((odd, oddIndex) => (
            <View key={oddIndex} style={{
              backgroundColor: '#FCF547',
              width: 90,
              height: 50,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>{odd.label}</Text>
              <Text>{odd.value}</Text>
            </View>
          ))}
        </View>
      </View>
    ))}
  </View>
);

export default Gotd;