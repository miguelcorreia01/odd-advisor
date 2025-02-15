import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';
import { sharedStyles } from '../components/SharedStyles';

import password from "../assets/password.png";
import ema from "../assets/email.png";
import date from "../assets/date.png";

import arrow from "../assets/arrow.png";
import { auth, db } from '../firebaseConfig';

function Profile() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        const user = auth.currentUser;
        console.log('Current user:', user);
      
        if (user) {
          const docRef = doc(db, 'users', user.uid);
          console.log('Document reference:', docRef);
      
          try {
            const docSnap = await getDoc(docRef);
            console.log('Document snapshot:', docSnap);
      
            if (docSnap.exists()) {
              setUserData(docSnap.data());
            } else {
              Alert.alert('User data not found');
            }
          } catch (error) {
            console.log('Error fetching user data:', error);
            Alert.alert('Error fetching user data');
          }
        }
      };
  
      fetchUserData();
    }, [isFocused]);
  
    const handleEditProfile = () => {
      navigation.navigate('EditProfile', { userData });
    };
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error logging out', error.message);
      }
    };
  
    useEffect(() => {
      if (isFocused && navigation?.state?.params?.updatedUserData) {
        setUserData(navigation.state.params.updatedUserData);
      }
    }, [isFocused]);
  
  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Image source={arrow} style={sharedStyles.Icon} />
        <Text style={sharedStyles.title}>Profile</Text>
        <View style={sharedStyles.placeholder} />
      </View>
      <Text style={{ position: 'absolute', fontWeight: 'bold', fontSize: 30, top: 150, textAlign: 'center' }}>
        User Information
      </Text>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.square}>
          <Image source={ema} style={{ borderRadius: 12, tintColor: 'white' }} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder={userData?.username || 'Username'}
          placeholderTextColor="#B49DCA"
          editable={false}
        />
      </View>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.square}>
          <Image source={ema} style={{ borderRadius: 12, tintColor: 'white' }} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder={userData?.email || 'Email Address'}
          placeholderTextColor="#B49DCA"
          editable={false}
        />
      </View>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.square}>
          <Image source={password} style={{ borderRadius: 12, tintColor: 'white' }} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="**********"
          placeholderTextColor="#B49DCA"
          secureTextEntry={true}
          editable={false}
        />
      </View>
      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.square}>
          <Image source={date} style={{ borderRadius: 12, tintColor: 'white' }} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder={userData?.birthDate || 'Birthdate'}
          placeholderTextColor="#B49DCA"
          editable={false}
        />
      </View>
      <View style={sharedStyles.buttonContainer}>
        <TouchableOpacity style={sharedStyles.button} onPress={handleEditProfile}>
          <Text style={sharedStyles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={sharedStyles.buttonContainer}>
        <TouchableOpacity style={sharedStyles.button} onPress={handleLogout}>
          <Text style={sharedStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;