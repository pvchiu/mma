// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = { primary: '#4285F4', gray: '#777', white: '#fff' };

const MENU = [
  { id: 'm1', img: require('../assets/images/profile.png'), label: 'My Profile' },
  { id: 'm2', img: require('../assets/images/settings.png'), label: 'Settings' },
  { id: 'm3', img: require('../assets/images/support.png'), label: 'Support' },
  { id: 'm4', img: require('../assets/images/faq.png'), label: 'FAQ' },
  { id: 'm5', img: require('../assets/images/admin.png'), label: 'Admin' },
  { id: 'm6', img: require('../assets/images/logout.png'), label: 'Logout' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Khung xanh trên */}
      <View style={styles.topRect} />

      {/* Avatar */}
      <View style={styles.avatarWrap}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
          <TouchableOpacity style={styles.cameraWrap}>
            <MaterialCommunityIcons name="camera" size={22} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Thông tin user */}
      <View style={styles.info}>
        <Text style={styles.name}>Pham Quang Khang (KHANGPQ3)</Text>
        <Text style={styles.unit}>(BM SE)</Text>
      </View>

      {/* Menu */}
      <FlatList
        data={MENU}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuRow}>
            <View style={styles.menuLeft}>
              <Image source={item.img} style={styles.menuIcon} />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color="#aaa"
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ paddingBottom: 120 }} // chừa khoảng trống cho footer
      />

      {/* Footer (luôn nằm dưới) */}
      <View style={styles.footer}>
        <Text style={{ color: '#999' }}>myFPT Version 5.3.10</Text>
        <Text style={{ color: '#999' }}>Copyright © FPT Software 2021</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  topRect: { height: 140, backgroundColor: COLORS.primary, margin: 16, borderRadius: 16 },

  avatarWrap: { position: 'absolute', left: 0, right: 0, top: 80, alignItems: 'center' },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#e9f4ff',
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { fontSize: 42, fontWeight: '700', color: COLORS.primary },
  cameraWrap: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
    elevation: 3,
  },

  info: { marginTop: 16, alignItems: 'center', paddingHorizontal: 16 },
  name: { fontSize: 18, fontWeight: '700' },
  unit: { marginTop: 6, color: COLORS.gray },

  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  menuLeft: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eef6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuIcon: { width: 22, height: 22, resizeMode: 'contain' },
  menuLabel: { fontSize: 16 },
  sep: { height: 1, backgroundColor: '#eee', marginLeft: 68 },

  footer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 8,
  },
});
