import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';;
import { sharedStyles } from '../components/SharedStyles';

import arrowr from "../assets/arrowright.png";
import addbox from "../assets/addbox.png";

function DefineGotd(){
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.navigate('Admin');
  };

    return(
       <View style={sharedStyles.container}>
       <View style={sharedStyles.bar}>
         <Text style={sharedStyles.title}>Define Gotd</Text>
       </View>
       <View style={{...sharedStyles.button, top: -150}}>
  <Text style={[sharedStyles.buttonText, { flex: 1, justifyContent: 'center'}]}>Today</Text>
  <Image source={arrowr}style={{tintColor : 'black', left: -20}} />
</View>
<TouchableOpacity style={{...styles.select, top: -100}}>
  <Text style={[sharedStyles.buttonText, { flex: 1, justifyContent: 'center'}]}>Select League</Text>
  <Image source={addbox}style={{tintColor : 'black', left: -50}} />
</TouchableOpacity>
<TouchableOpacity style={{...styles.select, top: -100}}>
  <Text style={[sharedStyles.buttonText, { flex: 1, justifyContent: 'center'}]}>Select Game</Text>
  <Image source={addbox}style={{tintColor : 'black', left: -50}} />
</TouchableOpacity>

<TouchableOpacity style={styles.leftButton} onPress={handleCancel}>
          <Text style={sharedStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>


        </View>
        );
        }

        
        const styles = StyleSheet.create({
              select: {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#E8E3E3",
                width: "100%",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 0,
                marginVertical: 15,
                height: 50,
              },
              leftButton: {
                backgroundColor: '#4953AA',
                paddingVertical: 10,
                paddingHorizontal: 20,
                top: 30,
                width: '35%',
                borderRadius: 12,
                marginRight: 10,
              }
            });
  
            export default DefineGotd;