import React, { memo } from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'coral',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700'  
  }
});

export default memo(Header);