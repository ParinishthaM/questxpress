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
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>QuestXpress</Text>
                    </View>
                    <Image source={require("../assets/quest.png")} style={styles.iconImage1}></Image>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SearchScreen")
                    }>
                        <Text style={styles.routeText}>QueryHere</Text>
                       <Image source={require("../assets/query.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SolutionScreen")
                    }>
                        <Text style={styles.routeText}>Post solution</Text>
                        
                        <Image source={require("../assets/solution.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 90,
        width : "50%",
        height:"50%",
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 50,
        paddingLeft: 30
    },
   
    iconImage: {
        position: "absolute",
        height: 130,
        width: 130,
        resizeMode: "contain",
        right: 20,
        top: -2
    },
    iconImage1: {
        position: "absolute",
        height: 250,
        width: 250,
        resizeMode: "contain",
        left: 820,
        top: 250
    }
});