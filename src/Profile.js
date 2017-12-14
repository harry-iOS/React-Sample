import React from 'react';

import { StyleSheet, Text, View, Platform, Image, Button } from 'react-native';

 
export default class Profile extends React.Component {

    render(){
        const {state} = this.props.navigation;
        console.log( state )
        return (
        <View style = {styles.container}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <Image source= {require('../assets/profile.png')} style = {{ alignItems: 'center'}}/>
            <View style = {{height: 1, backgroundColor: '#d3d3d3', width: 300, marginTop: 20}} />
            </View>
            <View style  = {{flex:1}}>
                <ProfileInfo title = 'Name' detail = {state.params.item.title}/>
                <ProfileInfo title = 'Email' detail = {state.params.item.email}/>
                <ProfileInfo title = 'Status' detail = {state.params.item.status}/>
                <ProfileInfo title = 'Last online' detail = {state.params.item.time}/>
            </View>
        </View>
        );
    }

}

class ProfileInfo extends React.Component{
    render(){
        return(
            <View style = {{flexDirection:'row', marginTop:10}}>
                <Text style = {{fontWeight: 'bold', fontSize: 14}}> {this.props.title}: </Text>
                <Text style = {{fontWeight:'normal', fontSize: 14}}> {this.props.detail}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
    },
})


                