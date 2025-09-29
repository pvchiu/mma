// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

// Import các màn hình khác
import AllAppsScreen from './app/AllAppsScreen';
import ProfileScreen from './app/ProfileScreen';

// Colors
export const COLORS = {
  primary: '#4285F4',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#666666',
  black: '#000000',
};

// Một số màn hình demo
const HomeScreen = () => (
  <View style={styles.center}>
    <Text style={styles.title}>Home Screen</Text>
    <Text style={styles.subtitle}>Welcome to myFPT Clone</Text>
  </View>
);

const GoldScreen = () => (
  <View style={styles.center}>
    <Text style={styles.title}>Gold Screen</Text>
    <Text style={styles.subtitle}>Your rewards and points</Text>
  </View>
);

const GameScreen = () => (
  <View style={styles.center}>
    <Text style={styles.title}>Game Screen</Text>
    <Text style={styles.subtitle}>Play games and win rewards</Text>
  </View>
);

// Tạo Bottom Tab
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'AllApps':
            iconName = 'apps';
            break;
          case 'Gold':
            iconName = focused ? 'star' : 'star-outline';
            break;
          case 'Game':
            iconName = focused ? 'gamepad-variant' : 'gamepad-variant-outline';
            break;
          case 'Profile':
            iconName = focused ? 'account' : 'account-outline';
            break;
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.gray,
      tabBarStyle: {
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="AllApps" component={AllAppsScreen} options={{ title: 'All Apps' }} />
    <Tab.Screen name="Gold" component={GoldScreen} />
    <Tab.Screen name="Game" component={GameScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
  },
});
