import React from 'react';
import { StyleSheet, Text, View, Platform, Image, Button } from 'react-native';
import { RouteNavigator } from './src/Navigator';

export default class App extends React.Component {
  render(){
    return(
      <RouteNavigator/>
    );
  }
}


  const styles = StyleSheet.create({
    container: {
      ...Platform.select({
        ios: {
          backgroundColor: '#fc0'
        },
        android: {
          backgroundColor: '#07f'
        }
      }),
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0
    },
    applogo: {
      backgroundColor: '#06f',
      width: 50,
      height: 50,
      marginBottom: 60
    },
  });
  