import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={style.container}>
      <Text style={isDarkMode ? style.darkText : style.lighTtext}>
        Hello Arihant!!
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: '#ffffff',
  },
  lighTtext: {
    color: 'black',
  },
});

export default AppPro;
