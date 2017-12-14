import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Profile from './Profile';

export default class ChatList extends React.Component {

    state = {
        chats: [{
            id:0,
            title: 'Title One',
            time: '1:30PM',
            email: 'one@test.com',
            status: 'hey! I am one'
        },
        {
            id:1,
            title: 'Title Two',
            time: '1:35PM',
            email: 'two@test.com',
            status: 'hey! I am two'
        },
        {
            id:2,
            title: 'Title Three',
            time: '1:40PM',
            email: 'three@test.com',
            status: 'hey! I am three'
        },
        {
            id:3,
            title: 'Title Four',
            time: '1:45PM',
            email: 'four@test.com',
            status: 'hey! I am four'
        },
        {
            id:4,
            title: 'Title Five',
            time: '1:50PM',
            email: 'five@test.com',
            status: 'hey! I am five'
        },
        {
            id:5,
            title: 'Title Six',
            time: '1:55PM',
            email: 'Six@test.com',
            status: 'hey! I am six'
        },
        {
            id:6,
            title: 'Title Seven',
            time: '2:00PM',
            email: 'seven@test.com',
            status: 'hey! I am seven'
        }]
    };

    _keyExtractor = (item, index) => item.id;


    didSelectItem = (item) => {
        console.log("===============>")
        // let item = this.state.chats.
        console.log("============ item", item);
        this.props.navigation.navigate('Profile', {item:item})
    }

    renderItem = ({ item }) => {
        console.log(">>>", item);
        return (
            <ListItem item = {item} didSelectItem = {this.didSelectItem}/>
        )
      };

    render(){
        return(
            <View> 
                <FlatList data = {this.state.chats} renderItem = {this.renderItem} keyExtractor = {this._keyExtractor}/>
            </View>
        );
    }
}


class ListItem extends React.Component {
    render(){
        return (
        <TouchableOpacity onPress = {() => this.props.didSelectItem(this.props.item)}>                                                                        
        <View style={styles.lisItem}>
          <Text style={{flex:1, marginLeft: 15}}>{this.props.item.title}</Text>
          <Text style={{flex:1, textAlign: 'right', marginRight:10}}>{this.props.item.time}</Text>
          <Image source= {require('../assets/arrowRight.png')} style = {{ alignItems: 'flex-end', marginRight: 10, width: 10, height: 10}}/>
        </View>
      </TouchableOpacity>
      );
    }
}


const styles = StyleSheet.create({
    lisItem: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#D3D3D3',
    },
  });