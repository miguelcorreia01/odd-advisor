import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView , FlatList} from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import menu from "../assets/menu.png";
import pt from "../assets/leagues/ptt.png";
import lpt from "../assets/leagues/pt.png";
import star from "../assets/star.png";
import porto from "../assets/clubs/porto.png";
import benfica from "../assets/clubs/benfica.png";
import bet365 from "../assets/houses/bet365.png";
import betclic from "../assets/houses/betclic.png";




function Gotd2( ){
    const navigation = useNavigation();
    return(
       <View style={styles.container}>
       <View style={styles.bar}>
         <Image source={menu} style={styles.Icon} />
         <Text style={styles.title}>Game of the day</Text>
       </View>
       <View style={styles.button}>
    <Image source={lpt} style={styles.leftImage}resizeMode="contain" />
  <Text style={[styles.buttonText, { flex: 1, justifyContent: 'center'}]}>Liga Portugal</Text>
  <Image source={pt} style={styles.rightImage} />
</View>
<View style={styles.game}>
<Image source={star} style={{...styles.Fav, left: 5}}/>
<Image source={benfica} style={styles.club1} />
<Text style={styles.hours}>20:00</Text>
<Text style={[styles.gametext, { flex: 1, justifyContent: 'center'}]}>Benfica     x     Porto</Text>
<Image source={porto} style={styles.club2} resizeMode="contain"/>
<Image source={star} style={{...styles.Fav, right: 5}} />
</View>
<View style={styles.bestOdds}>
  <Text style={styles.Text}>Best odds</Text>
</View>
<View style={styles.betType}>
  <Text style={styles.Text}>Resultado (Tempo Regulamentar)</Text>
</View>
<View style={styles.odds}>
  <View style={styles.imagesContainer}>
    <View style={styles.imageContainer}>
      <Image source={bet365} style={styles.image} resizeMode="contain"/>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Benfica</Text>
    <Text style={styles.text}>2,12</Text>
    </View>
  </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Empate</Text>
    <Text style={styles.text}>3,15</Text>
    </View>
        </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Porto</Text>
    <Text style={styles.text}>2,86</Text>
    </View>
        </View>
      </View>
    </View>
    <View style={styles.imageContainer}>
      <Image source={betclic} style={styles.image}resizeMode="contain" />
      <View style={styles.boxContainer}>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Benfica</Text>
    <Text style={styles.text}>2,07</Text>
    </View>
        </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Empate</Text>
    <Text style={styles.text}>3,00</Text>
    </View>
        </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Porto</Text>
    <Text style={styles.text}>2,78</Text>
    </View></View>
      </View>
    </View>
  </View>
</View>
<View style={styles.betType}>
  <Text style={styles.Text}>Ambas marcam</Text>
</View>
<View style={styles.odds}>
  <View style={styles.imagesContainer}>
    <View style={styles.imageContainer}>
      <Image source={bet365} style={styles.image} resizeMode="contain"/>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Sim</Text>
    <Text style={styles.text}>2,00</Text>
    </View>
        </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Não</Text>
    <Text style={styles.text}>2,50</Text>
    </View>
        </View>
      </View>
    </View>
    <View style={styles.imageContainer}>
      <Image source={betclic} style={styles.image}resizeMode="contain" />
      <View style={styles.boxContainer}>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Sim</Text>
    <Text style={styles.text}>1,84</Text>
    </View>
        </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Não</Text>
    <Text style={styles.text}>2,00</Text>
    </View></View>
      </View>
    </View>
  </View>
  
</View>
<TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
  </View>
       );
       }



       const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
        bar: {
          backgroundColor: "#363E8D",
          height: 100,
          width: "100%",
          position: "absolute",
          top: 0,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 25,
          paddingRight: 16,
        },
        Icon: {
          width: 30,
          height: 30,
          top: 20,
          borderRadius: 12,
          tintColor: "white",
        },
        title: {
          color: "white",
          fontSize: 24,
          textAlign: "center",
          top: 20,
          flex: 1,
          left: -15,
        },
        button: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E8E3E3",
            width: 300,
            borderRadius: 10,
            top : 50,
            paddingVertical: 10,
            paddingHorizontal: 0,
            marginVertical: 15,
            height: 50,
          },
          buttonText: {
            textAlign : "center",
            color: "#4953AA",
            fontSize: 20,
          },
          leftImage: {
            width: 50,
            height: 50,
            position: "absolute",
            left: 0,
          },
          rightImage: {
            width: 50,
            height: 50,
            position: "absolute",
            right: 0,
          },
          game: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E8E3E3",
            width: "100%",
            top: 30,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 0,
            marginVertical: 15,
            height: 150,
          },
          gametext: {
            textAlign : "center",
            color: "#000000",
            fontSize: 15,
            fontWeight: "bold",
            right: 22,
          },
          hours: {
            textAlign : "center",
            color: "#000000",
            fontSize: 15,
            top: -50,
            right: -180,
          },
          Fav: {
            width: 30,
            height: 30,
            position: "absolute",
            right: 50,
          },
          club1: {
            width: 50,
            height: 50,
            position: "absolute",
            left: 50,
          },
          club2: {
            width: 50,
            height: 50,
            position: "absolute",
            right: 50,
          },
          odds: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E8E3E3",
            width: 450,
            top: 20,
            height: 150,
          },
          imagesContainer: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 10,
          },
          imageContainer: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          image: {
            width: 80,
            height: 50,
            marginVertical: 5,
            marginHorizontal: 10,
            left: 5,
          },
          boxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          },
          box: {
            width: 90,
            height: 50,
            backgroundColor: '#FCF547',
            marginHorizontal: 5,
          },
          textBox: {
            width: 80,
            alignItems: 'center',
          },
          text: {
            textAlign: 'center',
          },
        bestOdds: {
          backgroundColor: "#363E8D",
          width: 150,
          height: 40,
          top: 20,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        },
        betType: {
          backgroundColor: "#363E8D",
          width: 450,
          height: 40,
          top: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        Text: {
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        },
        backButton: {
            backgroundColor: '#363E8D',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            alignSelf: 'center',
            bottom: -40,
          },
          backButtonText: {
            color: 'white',
            fontSize: 16,
          },
          

    });
  
    export default Gotd2;