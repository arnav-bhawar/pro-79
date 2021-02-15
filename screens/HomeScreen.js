import React, {Component} from 'react';
import {Modal,View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, FlatList} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <FlatList
    keyExtractor = {this.keyExtractor}
    data= {this.state.allRequests}
    renderItem = {this.renderItem}
    />

        )
    }
    
    renderItem = ( {item, i} )=>{
        console.log(item.item_name);
        return(
            <ListItem
            key= {1}
            title = {item.item_name}
            subtitle= {item.description}
            titleStyle = {{color: 'black', fontWeight: 'bold'}}
            rightElement={
                <TouchableOpacity style = {styles.button}>
                    <Text style = {{color: '#ffff'}}>Exchange</Text>

                </TouchableOpacity>
            }
            
            bottomDivider
            />
        )
    }
}

