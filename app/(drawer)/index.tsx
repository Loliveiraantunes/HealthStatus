import React  from 'react';
import { StyleSheet, View } from 'react-native';


import HealthStatus from '~/components/health-status/health-status';

const Page = () => {

  return (
    <View style={styles.container}>
      <HealthStatus/>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 100
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
