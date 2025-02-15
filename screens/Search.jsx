import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView , FlatList} from "react-native";

import { sharedStyles } from '../components/SharedStyles';
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import benfica from "../assets/clubs/benfica.png";
import city from "../assets/clubs/city.png";
import liverpool from "../assets/clubs/liverpool.png";
import porto from "../assets/clubs/porto.png";
import star from "../assets/star.png";


function Search(){
    return(
       <View style={sharedStyles.container}>
       <View style={sharedStyles.bar}>
         <Image source={menu} style={sharedStyles.Icon} />
         <Text style={sharedStyles.title}>Search</Text>
       </View>
       <View style={{...sharedStyles.button, top: -70}}>
  <Text style={[sharedStyles.buttonText, { flex: 1, justifyContent: 'center'}]}>Benfica</Text>
  <Image source={search}style={{tintColor : 'black', left: -20}} />
</View>
<View style={{...styles.boxContainer, top: -70}}>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Todos</Text>
    </View>
  </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Casa</Text>
    </View>
        </View>
        <View style={styles.box}>
        <View style={styles.textBox}>
    <Text style={styles.text}>Fora</Text>
    </View>
        </View>
      </View>
      <View style={{...styles.game, top:-40}}>
<Image source={star} style={{...styles.Fav, left: 5}}/>
<Image source={benfica} style={styles.leftImage}resizeMode="contain" />
<Text style={{...styles.hours, top: -25, left: 150 }}>21/5/2023 20:00</Text>
<Text style={[styles.gametext, { flex: 1, justifyContent: 'center', right:65}]}>Benfica   x   Porto</Text>
<Image source={porto} style={styles.rightImage} resizeMode="contain" />
<Image source={star} style={{...styles.Fav, right: 5}} />
</View>
<View style={{...styles.game, top:-40}}>
<Image source={star} style={{...styles.Fav, left: 5}}/>
<Image source={benfica} style={styles.leftImage}resizeMode="contain" />
<Text style={{...styles.hours, top: -25, left: 150 }}>21/5/2023 20:00</Text>
<Text style={[styles.gametext, { flex: 1, justifyContent: 'center', right: 60}]}>Benfica   x   Man. City </Text>
<Image source={city} style={styles.rightImage} resizeMode="contain" />
<Image source={star} style={{...styles.Fav, right: 5}} />
</View>
<View style={{...styles.game, top:-40}}>
<Image source={star} style={{...styles.Fav, left: 5}}/>
<Image source={liverpool} style={styles.leftImage}resizeMode="contain" />
<Text style={{...styles.hours, top: -25, left: 150 }}>21/5/2023 20:00</Text>
<Text style={[styles.gametext, { flex: 1, justifyContent: 'center', right: 60}]}>Liverpool   x   Benfica</Text>
<Image source={benfica} style={styles.rightImage} resizeMode="contain" />
<Image source={star} style={{...styles.Fav, right: 5}} />
</View>
</View>
    );
}





const styles = StyleSheet.create({
      box: {
        width: 90,
        height: 50,
        backgroundColor: '#E8E3E3',
        marginHorizontal: 5,
      },
      textBox: {
        width: 80,
        alignItems: 'center',
        top: 10,
      },
      text: {
        textAlign: 'center',
        fontWeight: "bold",
      },
      hours: {
        textAlign : "center",
        color: "#000000",
        fontSize: 15,
        right: -180,
      },
      game: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E8E3E3",
        width: "100%",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginVertical: 15,
        height: 70,
      },
      gametext: {
        textAlign : "center",
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
      },
      leftImage: {
        width: 50,
        height: 50,
        position: "absolute",
        left: 50,
      },
      rightImage: {
        width: 50,
        height: 50,
        position: "absolute",
        right: 50,
      },
      Fav: {
        width: 30,
        height: 30,
        position: "absolute",
        right: 50,
      },
    
});
  
export default Search;