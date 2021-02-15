import React, {Component} from 'react';
import {Modal,View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
constructor(){
    super()
    this.setState = {
        emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      phoneNumber:'',
      confirmPassword:'',
      isModalVisible:'false'
    }
}

userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(()=>{ 
        db.collection('users').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            phoneNumber:this.state.phoneNumber,
            email_id:this.state.emailId,
            address:this.state.address
        })
    return Alert.alert("Sucessfully Loged in")
     })
.catch((error)=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errorMessage)
})

}

userSignUp = (emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password)
    .then ((reponse)=>{
        return Alert.alert ("User Added Successfully")
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    });
}

showModal=()=>{
    return(
        <View style = {StyleSheet.container}>
            <View style = {StyleSheet.profileContainer}>
                <SantaAnimation/>
                <Text style = {styles.title}>Book Santa</Text>
            </View>
            <View style = {styles.buttonContainer}>
                <TextInput
                style ={styles.logiBox}
                placeHolder = ""
                placeholderTextColor = "#ffff"
                keyBoardType = 'email-address'
                onChangeText = {(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}
                />

                <TextInput
                style = {styles.loginBox}
                secureTextEntry = {true}
                placeholder = "password"
                placeholderTextColor = '#ffff'
                onChangeText = {(text)=>{
                    this.setState({
                        password: text
                    })
                }}
                />
                <TouchableOpacity
                style = {[styles.button,{marginBottom:20, marginTop:20}]}
                onPress = {()=>{this.userLogin(this.state.emaiId, this.state.password)}}
                >
                    <Text style = {styles.buttonText}>email</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.button}
                     onPress = {()=>{this,userSignUp(this.state.emailId, this .state.password)}}
                     >
                         <Text style = {styles.buttonText}>password</Text>
                     </TouchableOpacity>

                     <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

                     
            </View>
        </View>
    )


}
}

const Styles = StyleSheet.crenate({
    container:{
        flex:1,
        backgroundColor:'#F8BE85'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize: 65,
        fontWeight:'300',
        paddingBottom: 30,
        color: '#ff3d00'
    },

    loginBox:{
        width: 300,
        height:40,
        BordeRBottomWidth: 1.5,
        borderColoe: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft : 10
    },
    button:{
        width:300,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:25,
        backgroundColor: '#ff9800',
        shadowColor: "#000",
        shadowOffset :{
            width:0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius:10.32,
        elevation:16,
    },
    registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
    buttonText:{
        color: '#ffff',
        fontWeight:'200',
        fontSize: 20
    },
    buttonContainer:{
        flex:1,
        alignItems: 'center'
    }
})
