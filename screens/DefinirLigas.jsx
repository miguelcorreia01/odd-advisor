import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from '../components/SharedStyles';

import arrow from "../assets/arrow.png";

const DfinirLigas = () => {
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
      <View style={sharedStyles.bar}>
        <Image source={arrow} style={sharedStyles.headerIcon} />
        <Text style={sharedStyles.title}>Definir Ligas</Text>
      </View>

      {/* League Row */}
      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Premier League</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>La Liga</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Bundesliga</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Seria A</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Ligue 1</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Liga Bwin</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Eredivisie</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={styles.leagueRow}>
        <Text style={styles.leagueText}>Süper Lig</Text>
        <TouchableOpacity
          onPress={handleCheckmarkPress}
          style={[styles.checkmark, { backgroundColor: isChecked ? '#363E8D' : '#C0C0C0' }]}
        />
      </View>

      <View style={sharedStyles.buttonContainer}>
        <TouchableOpacity style={styles.leftButton} onPress={handleCancel}>
          <Text style={sharedStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  leagueRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    paddingVertical: 10,
    marginVertical: 5,
    width: "100%",
    justifyContent: "space-between",
  },
  leagueText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  checkmark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  leftButton: {
    backgroundColor: '#4953AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%',
    borderRadius: 12,
    marginRight: 10,
  },
});

export default DfinirLigas;
