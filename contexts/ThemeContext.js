import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Phát hiện chế độ hệ thống mặc định
  const colorScheme = Appearance.getColorScheme();

  // Light theme
  const lightTheme = {
    background: '#FFFFFF',
    text: '#1A1A1A',
    primary: '#007AFF', // xanh dương nhạt kiểu iOS
    buttonText: '#FFFFFF',
    card: '#F5F5F5',
  };

  // Dark theme
  const darkTheme = {
    background: '#121212',
    text: '#EDEDED',
    primary: '#0A84FF', // xanh dương dịu hơn trong nền tối
    buttonText: '#FFFFFF',
    card: '#1E1E1E',
  };

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
