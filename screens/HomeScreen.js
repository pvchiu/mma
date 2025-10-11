import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* ICON / AVATAR */}
      <Image
        source={require('../assets/images/avatar.jpg')} // thêm ảnh avatar.png vào thư mục assets
        style={styles.avatar}
      />

      {/* Tiêu đề chào mừng */}
      <Text style={[styles.title, { color: theme.text }]}>Chào Mừng Trở Lại!</Text>

      {/* Mô tả ngắn */}
      <Text style={[styles.description, { color: theme.text }]}>
        Hãy quản lý thông tin của bạn{'\n'}một cách dễ dàng.
      </Text>

      {/* Nút chính: Xem Hồ Sơ Của Tôi */}
      <TouchableOpacity
        style={[styles.mainButton, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={[styles.mainButtonText, { color: theme.buttonText || '#fff' }]}>
          Xem Hồ Sơ Của Tôi
        </Text>
      </TouchableOpacity>

      {/* Nút phụ: Cài Đặt */}
      <TouchableOpacity
        style={[styles.secondaryButton, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={[styles.secondaryButtonText, { color: theme.primary }]}>
          Cài Đặt
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  mainButton: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  mainButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    width: '80%',
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
