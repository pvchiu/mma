import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggleSwitch() {
  const { themeName, theme, toggleTheme } = useContext(ThemeContext);
  const styles = makeStyles(theme);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>Theme: {themeName === 'light' ? 'Light' : 'Dark'}</Text>
      <Switch
        value={themeName === 'dark'}
        onValueChange={toggleTheme}
      />
    </View>
  );
}

const makeStyles = (theme) =>
  StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, backgroundColor: theme.card, borderRadius: 8 },
    label: { color: theme.text, fontSize: 16 },
  });
