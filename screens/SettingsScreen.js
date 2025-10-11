import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme, isDarkMode } = useTheme(); // ✅ Dùng isDarkMode thay vì themeName

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.row}>
        <Text style={[styles.text, { color: theme.text }]}>
          Current Theme: {isDarkMode ? 'Dark 🌙' : 'Light ☀️'}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: theme.primary }}
          thumbColor="#f4f3f4"
          onValueChange={toggleTheme}
          value={isDarkMode} // ✅ Dùng isDarkMode
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
  },
});