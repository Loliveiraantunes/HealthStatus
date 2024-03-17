import React  from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

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
      fontFamily: 'Roboto'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#c1c1c1',
        fontFamily: 'Roboto'
      },
    logo: {
        width:200,
        height: 200,
        marginBottom: 20
    }
  });

const imageLogo = require('~/assets/icon.png');


export const Login = () => {
    return (
      <View style={styles.container}>
          <Image source={imageLogo} style={styles.logo}/>
          <Text style={styles.title}>APP NAME</Text>
          <View style={styles.separator}/>
          <Text style={styles.subtitle}>login</Text>
      </View>
    );
};

