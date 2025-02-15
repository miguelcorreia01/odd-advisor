import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Add this import

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import 'react-native-gesture-handler';



import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Sports from './screens/Sports';
import Leagues from './screens/Leagues';
import Games from './screens/Games';
import SelectedGame from './screens/SelectedGame';
import Gotd from './screens/Gotd';
import Gotd2 from './screens/Gotd2';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import DefineGotd from './screens/DefineGotd';
import Search from './screens/Search';
import TiposDeAposta from './screens/TiposDeAposta';
import DefinirLigas from './screens/DefinirLigas';
import Admin from './screens/Admin';


const auth = getAuth();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = auth.currentUser;
      if (user && user.email === 'admin@admin.com') {
        setIsAdmin(true);
      }
    };

    checkAdminStatus();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Gotd" component={Gotd} options={{ headerShown: false }} />
      <Tab.Screen name="Sports" component={Sports} options={{ headerShown: false }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      {isAdmin && <Tab.Screen name="Admin" component={Admin} options={{ headerShown: false }} />}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Gotd2" component={Gotd2} options={{ headerShown: false }} />
        <Stack.Screen name="Gotd" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="DefineGotd" component={DefineGotd} options={{ headerShown: false }} />
        <Stack.Screen name="DefinirLigas" component={DefinirLigas} options={{ headerShown: false }} />
        <Stack.Screen name="TiposDeAposta" component={TiposDeAposta} options={{ headerShown: false }} />
        <Stack.Screen name="Games" component={Games} options={{ headerShown: false }} />
        <Stack.Screen name="SelectedGame" component={SelectedGame} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
