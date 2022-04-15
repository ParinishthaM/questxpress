import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase';

export default class SolutionScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem: '',
            solution: '',
            videolink: '',
            // solution:''
           
        }
    }

    submitSolution = ()=>{
        db.collection("soutions").add({
            problem: this.state.problem,
            solution: this.state.solution,
            videolink: this.state.videolink,
          
        })
     
        this.setState({
            problem: '',
            solution: '',
            videolink: '',
        
        
        })
        ToastAndroid.Alert('Your solution has been submitted', ToastAndroid.SHORT)
    }
        
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}
             behavior="padding" enabled>
               <Header 
                    backgroundColor = {'#A1C181'}
                     centerComponent = {{
                        text : 'POST SOLUTION',
                        style : { color: 'black', fontSize: 25,fontWeight:'BOLD'}
                    }}
                />
                <TextInput 
                    placeholder="problem"
                    onChangeText= {(text)=>{
                        this.setState({
                            problem: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.problem}
                    style={styles.title}/>
                <TextInput
                    placeholder="Solution"
                   
                    onChangeText= {(text)=>{
                        this.setState({
                            solution: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.solution}
                    style={styles.author} />
                    <TextInput 
                    placeholder="videolink"
                    onChangeText={(text)=>{
                      this.setState({
                        videolink:text
                      })
                    }}
                    placeholderTextColor='black'
                    value={this.state.videolink}
                    style={styles.author}
                    />
                <TextInput 
                    placeholder="Explain your Solution in Detail "
                    onChangeText= {(text)=>{
                        this.setState({
                            solution: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.solution}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitSolution}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
      textAlignVertical: "top"
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#FE7F2D',
      width: 80,
      height: 40,color:'black',
  },
  buttonText: {
      textAlign: 'center',
      
      fontWeight: 'bold',
      color:'black',
  }
});
