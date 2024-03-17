import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import socket from '~/requests/socket/SocketProvider';

const image = require('~/assets/health.gif');

const healthWarnings = {
    ok: '#defcd2',
    warning: '#ff5e00',
    alert: '#ff4747'
};


function getFrequencyWarning(frequency: number) {
    if(!frequency)
        return healthWarnings.ok;

    return  frequency >= 50 && frequency <= 100 ? healthWarnings.ok : 
            frequency >= 40 && frequency < 50 || frequency > 100 && frequency < 110 ? healthWarnings.warning :
             healthWarnings.alert;
}

export default function HealthStatus(props:any) {

    const [frequency, setFrequency] = useState(0);
    const [pressure, setPressure] = useState(0);
  
    useEffect(() => {
  
      socket.on('frequency', (data) => {
          console.log('Received message:', data);
          if(data && data.value)
            setFrequency(data.value);
      });
    
      socket.on('pressure', (data) => {
          console.log('Received message:', data);
      
          if(data && data.value)
            setFrequency(data.value);
      });
  
      return () => {
        socket.disconnect();
      };
  
    }, []);

    return (
    <View style={styles.healthContainer}>
        <View style={{width: '100%',backgroundColor: getFrequencyWarning(frequency)}}>
            <ImageBackground source={image}  style={styles.image} imageStyle={ styles.imageStyle} >
                <Text style={styles.innerLeftTopText}>#teste</Text>
                <Text style={styles.smallText}>Frequência cardíaca</Text>
                <Text style={{...styles.innerText, color: getFrequencyWarning(frequency)}}>{frequency}</Text>
                <Text style={styles.smallText}>BPM</Text>
            </ImageBackground>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    healthContainer: {
        width: '98%', 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    innerText : {
        color: '#fff',
        fontSize: 50,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        left: 45
    },
    innerLeftTopText : {
        fontSize: 13,
        fontFamily: 'Roboto',
        left: -155,
        top: 140,
        color: 'gray',
    },
    smallText : {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Roboto',
        left: 45
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: 'hidden',
      },

      imageStyle: {
        resizeMode: 'cover',
        height: 500,
        width: 700,
        top: -100,
        left: -300,
        opacity: 0.9
      },
});

