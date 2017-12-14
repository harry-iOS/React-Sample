import React from 'react';
import { StyleSheet, Text, View, Platform, Image, Button, TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component {

  loginWithFB = () => {
    this.props.navigation.navigate('ChatList')
  }

    render() {
      let appLogo = {
        uri: 'http://personal.rbs.co.uk/content/rbs_co_uk/en_uk/personal/ways-to-bank/mobile-app/_jcr_content/par/canvas_3/canvasgrid/gridPar1/rowitemrebrand_2/accimage.dmp.full.RB_MOBILE_APP_ICONS_BALANCE.png'
        };
        console.log(appLogo)
      return (
        <View style = {styles.container}>
        <Image source = {appLogo} style = {styles.applogo}/>
        <TouchableOpacity onPress = {this.loginWithFB}>
          <Image style = {styles.fbButton} source = {{uri: 'data:image/png;base64,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'}}>
          </Image>
        </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      ...Platform.select({
        ios: {
          backgroundColor: '#fff'
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
      width: 200,
      height: 200,
      marginBottom: 60
    },
    fbButton: {
      width: 300,
      height: 50
    },
  });

