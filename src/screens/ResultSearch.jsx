import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import PropertyCard from "../components/PropertyCard/ProperyCard";
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useSelector} from "react-redux";


const ResultSearch = (props) => {
    const data = useSelector((state) => state.property.property),
          transactionTypeId = props.route.params.transactionTypeId;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contents}>

                {/*logo*/}
                <View style={styles.logo}>
                    <Icon
                        style={{marginRight:20}}
                        name='angle-left' size={30} color={'#022473'}
                        onPress = {()=> props.navigation.goBack()}/>
                    <Image source={require('../../assets/logo.png')} style={styles.image}/>
                </View>

                <Text style={styles.text}>{transactionTypeId === 1 ? 'Properties for Sales' : 'Properties for Lettings'}</Text>

                {/*product*/}
                { data.map(item => <PropertyCard key={item.Id} navigation={props.navigation} property={item} /> )}
            </View>
        </ScrollView>
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
        alignItems: "center"

    },
    image: {
        width: '80%',
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        marginVertical: 20
    },
    contents: {
        marginHorizontal: 20
    },
})

export default ResultSearch;
