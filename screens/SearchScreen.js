import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    TextInput,
    

} from "react-native";
import { Linking } from 'react-native';
export default class  QueryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
         query:''
        };
      }

    render() {
        const { query } = this.state;
        return (
            <View style={styles.textinputContainer}>
              <TextInput
                style={styles.textinput}
                placeholder={"Query here"}
                placeholderTextColor={"#FFFFFF"}
                value={query}
                onChangeText={text => this.setState({ query: text })}
              />
              
              <View style={styles.rectangle}>
                  <Text style= {styles.text}>HOW TO CHANGE TYRES FOR 2- WHEELER??
                  <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6_q9OL9Gvk0')}>
                       Click The link
                    </Text>
                  
                  </Text>
              </View>

            
              </View>
        );
    }
}

const styles = StyleSheet.create({
   
    textinput: {
      width: "57%",
      height: 50,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 18,
      backgroundColor: "#5653D4",
      fontFamily: "Rajdhani_600SemiBold",
      color: "#FFFFFF"
    },
    rectangle: {
        height: 150,
        width: 400,
        backgroundColor: 'aqua',
        position: 'absolute', 
        zIndex: 99,
        top: '100%',
        left: '5%'
      },
      text:{
          marginTop:35,
          margin:15,
          fontSize:25,
          fontWeight:'Bold',
          color:'black',
          fontFamily:'Arial'
      }
   
  });