import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = require('~/assets/health.gif');

const healthWarnings = {
    ok: '#defcd2',
    warning: '#ff5e00',
    alert: '#ff4747'
};


function getFrequencyWarning(frequency: number) {
    return  frequency >= 50 && frequency <= 100 ? healthWarnings.ok : 
            frequency >= 40 && frequency < 50 || frequency > 100 && frequency < 110 ? healthWarnings.warning :
             healthWarnings.alert;
}


export default function HealthStatus(props:any) {
    return (
    <View style={{...styles.healthContainer, backgroundColor: getFrequencyWarning(props.frequency)}}>
         <ImageBackground source={image}  style={styles.image} imageStyle={ styles.imageStyle} >
            <Text style={styles.smallText}>Frequência cardíaca</Text>
            <Text style={{...styles.innerText, color: getFrequencyWarning(props.frequency)}}>{props.frequency}</Text>
            <Text style={styles.smallText}>BPM</Text>
         </ImageBackground>
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
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        left: 45
    },
    smallText : {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'sans-serif',
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

