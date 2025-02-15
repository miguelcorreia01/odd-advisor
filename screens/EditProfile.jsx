import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth, updateEmail } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { sharedStyles } from '../components/SharedStyles'; // Import shared styles
import ema from "../assets/email.png";
import date from "../assets/date.png";
import arrow from "../assets/arrow.png";
import { auth, db } from '../firebaseConfig';

function EditProfile() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userData } = route.params;
  const [newEmail, setNewEmail] = useState('');
  const [newBirthDate, setNewBirthDate] = useState('');

  const birthDateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;

  useEffect(() => {
    if (userData) {
      setNewEmail(userData.email || '');
      setNewBirthDate(userData.birthDate || '');
    }
  }, [userData]);

  const handleCancel = () => navigation.navigate('Profile');

  const handleSaveChanges = async () => {
    if (!newEmail && !newBirthDate) {
      alert('Please enter at least one field to update');
      return;
    }

    if (newBirthDate && !birthDateRegex.test(newBirthDate)) {
      alert('Invalid birthdate format (DD/MM/YYYY)');
      return;
    }

    try {
      const user = auth.currentUser;

      // Update email in Firebase Authentication if changed
      if (newEmail && newEmail !== userData.email) {
        await updateEmail(user, newEmail);
      }

      // Update email and birthdate in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const updatedFields = {};
      if (newEmail && newEmail !== userData.email) updatedFields.email = newEmail;
      if (newBirthDate && newBirthDate !== userData.birthDate) updatedFields.birthDate = newBirthDate;

      if (Object.keys(updatedFields).length > 0) {
        await updateDoc(userDocRef, updatedFields);
      }

      // Reset state and navigate back
      setNewEmail('');
      setNewBirthDate('');
      navigation.navigate('Profile', {
        updatedUserData: {
          ...userData,
          email: newEmail || userData.email,
          birthDate: newBirthDate || userData.birthDate,
        },
      });
      alert('Changes saved successfully');
    } catch (error) {
      alert('Error saving changes: ' + error.message);
    }
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.bar}>
        <Image source={arrow} style={sharedStyles.Icon} />
        <Text style={sharedStyles.title}>Edit Profile</Text>
      </View>

      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={ema} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="New Email"
          placeholderTextColor="#B49DCA"
          value={newEmail}
          onChangeText={setNewEmail}
        />
      </View>

      <View style={sharedStyles.inputContainer}>
        <View style={sharedStyles.iconWrapper}>
          <Image source={date} style={sharedStyles.iconImage} />
        </View>
        <TextInput
          style={sharedStyles.input}
          placeholder="New Birthdate"
          placeholderTextColor="#B49DCA"
          value={newBirthDate}
          onChangeText={setNewBirthDate}
        />
      </View>

      <View style={sharedStyles.buttonContainer}>
        <TouchableOpacity style={sharedStyles.button} onPress={handleSaveChanges}>
          <Text style={sharedStyles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sharedStyles.button} onPress={handleCancel}>
          <Text style={sharedStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default EditProfile;
