import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LikeAnimation } from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Like Animation</Text>
        <LikeAnimation />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
