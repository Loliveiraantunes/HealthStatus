import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const PageTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default PageTwo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#d1d5db',
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
