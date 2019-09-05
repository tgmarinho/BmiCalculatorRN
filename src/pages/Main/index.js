import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B22',
  },
});

export default function Main() {
  return <View style={styles.container} />;
}
