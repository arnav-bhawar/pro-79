import React, {Component} from 'react';
import {Modal,View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';


export default class ExchangeScreen  extends Component {
    
    render(){
        return(
            <View style>
                <TouchableOpacity
                style = {[styles.button,{marginTop:10}]}
                onPress = {()=>{this,addItem(this,state.itemName, this.state.description)}}
                >
                    <Text style = {{color: '#ffff', fontSize:18 , fontWeight: 'bold'}}>Add Item</Text>
                </TouchableOpacity>
                addItem = (itemName, description)=>{
                    var userName = this.state.userName
                    db.collection("exchange_requests").add({
                        "username" : userName,
                        "item_name" : itemName,
                        "description" : description
                    })
                    this.setState({
                        itemName: '',
                        description: ''
                    })

                    return Alert.alert(
                        'Item ready to exchange',
                        '',
                        [
                            {text: 'OK', onPress: ()=>{
                                this.props.navigation.navigate
                            }}
                        ]
                    )
                }
                
            </View>

        )
    }
}