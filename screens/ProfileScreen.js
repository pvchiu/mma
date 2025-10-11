import React, { useState, useCallback } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';

export default function ProfileScreen({ navigation, route }) {
  const { theme } = useTheme();
  const [userInfo, setUserInfo] = useState({
    name: 'Alex Doe',
    bio: 'React Native Developer | Coffee Enthusiast ☕',
    avatar: 'https://i.pravatar.cc/150',
  });

  
  useFocusEffect(
    useCallback(() => {
      if (route.params?.updatedUser) {
        setUserInfo(route.params.updatedUser);
      }
    }, [route.params?.updatedUser])
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Image source={{ uri: userInfo.avatar }} style={styles.avatar} />
        <Text style={[styles.name, { color: theme.text }]}>{userInfo.name}</Text>
        <Text style={[styles.bio, { color: theme.text }]}>{userInfo.bio}</Text>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile', { user: userInfo })}
          color={theme.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { borderRadius: 10, padding: 20, alignItems: 'center', borderWidth: 1, width: '90%' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  bio: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});