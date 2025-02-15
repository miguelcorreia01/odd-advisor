
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { sharedStyles } from '../components/SharedStyles';

import { useNavigation } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from "../assets/Logo.png";
import user from "../assets/user.png";
import password from "../assets/password.png";
import email from "../assets/email.png";
import date from "../assets/date.png";
import image from "../assets/image.png";
import pedro from "../assets/pedro.png";
import arrow from "../assets/arrow.png";


const TiposDeAposta = () => {


  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.navigate('Admin');
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckmarkPress = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View style={sharedStyles.container}>
      <View style={styles.bar}>
          <Image source={arrow} style={styles.Icon} />
          <Text style={styles.title}>Tipos de Aposta</Text>
          <View style={styles.placeholder} />
        </View>
        <View
      style={{
        top:-50,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 150,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}>Resultado</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:120,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View
      style={{
        top:-40,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 5,
        paddingHorizontal: 150,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}>Ambas Marcam</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:130,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View
      style={{
        top:-30,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 2,
        paddingHorizontal: 150,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}>Acima/Abaixo Golos</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:132,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View
      style={{
        top:-20,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 2,
        paddingHorizontal: 150,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}>Resultado duplo</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:119,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View
      style={{
        top:-10,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 160,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}>Total Golos</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:140,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View
      style={{
        top: 0,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 150,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}> Marcador</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:121,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View
      style={{
        top: 10,
        backgroundColor: '#EDEDED',
        borderRadius: 0,
        paddingVertical: 2,
        paddingHorizontal: 150,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
      <Text style={{ right:100, fontSize: 20, fontWeight: 'bold'}}>Total De Cantos</Text>
      <TouchableOpacity
        onPress={handleCheckmarkPress}
        style={{
          left:128,
          backgroundColor: isChecked ? '#363E8D' : '#C0C0C0',
          borderRadius: 0,
          padding: 15,
        }}
      >  
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.leftButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  Icon: {
    width: 30,
    height: 30,
    top: 40,
    right:160,
    borderRadius: 12,
    tintColor: "white",
  },
  bar: {
    backgroundColor: "#363E8D",
    color: "white",
    height: 100,
    width: 600,
    position: "absolute",
    top: 0,
    left: -106,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    top: 15,
    left:20,
  },
  logo: {
    marginTop: 20,
    top: -90,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    leftButton: {
      backgroundColor: '#4953AA',
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: '45%',
      borderRadius: 12,
      marginRight: 10,
      top : 20,
    },
    rightButton: {
      backgroundColor: '#4953AA',
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: '45%',
      borderRadius: 12,
      marginLeft: 10,
    },
  buttonText: {
    textAlign : "center",
    color: "white",
    fontSize: 20,
  },
  inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#E8E3E3",
      width: "70%",
      top: -40,
      borderRadius: 10,
      padding: 15,
      marginVertical: 20,
      height: 50,
    },
    square: {
      width: 50,
      height: 50,
      borderRadius: 12,
      marginHorizontal: -20,
      backgroundColor: "#4953AA",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      flex: 1,
      textAlign : "center",
      height: "100%",
      color: "#363E8D",
    },
  });



export default TiposDeAposta;