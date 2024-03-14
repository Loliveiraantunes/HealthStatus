import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';


import io from 'socket.io-client';
import HealthStatus from '~/components/health-status/health-status';
import { HealthLifeSuppotHost } from '~/constants/Connection';

const Page = () => {

  const [frequency, setFrequency] = useState();

  useEffect(() => {
   
    const socket = io(HealthLifeSuppotHost);
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('room','teste');
    });
  
    socket.on('frequency', (data) => {
      console.log('Received message:', data);

      if(data && data.value)
        setFrequency(data.value);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <HealthStatus frequency={frequency}/>
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
