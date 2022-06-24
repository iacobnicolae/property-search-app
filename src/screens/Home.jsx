import React from 'react'
import {View, Image, StyleSheet} from "react-native";
import AppNavigator from "../navigation/AppNavigator";

const Home = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../assets/logo.png')} style={styles.image}/>
            </View>
            <AppNavigator navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
        backgroundColor: 'white'
    },
    logo: {
        marginTop:40,
        width: '100%',
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '80%',
        height: 100,
        resizeMode: 'contain',
    },
    content: {
        marginTop: 20,
        flexDirection: "column",
        width: "100%",
         height: 40,
    },
    SearchForm: {
        flex:1,
        marginTop: 20

    }
})
export default Home;