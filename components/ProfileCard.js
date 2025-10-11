import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileCard({ name, bio }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  bio: { fontSize: 14, color: 'gray' }
});
