import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import apiService from "../../service/api-service";
import { viewProperty } from "../../store/slice/PropertySlice";
import { useDispatch } from "react-redux";


const PropertyCard = (props) => {
    const dispatch = useDispatch();
     const propertySearch = async (transactionTypeId, Id) => {
        const path = transactionTypeId === 1 ? '/property/residential/sale' : '/property/residential/letting';
        await apiService.get(path+'/'+Id, {
            params: {
                'expand':'MainPhoto,Address,Types,Media,Currency',
                'fields':'Id,TransactionTypeId,Bedrooms,Bathrooms,Description,Price,Address.Street,Address.Town,Address.Latitude,Address.Longitude,Types.Id,Types.Name,Media.TypeId,Media.Data,Currency.Symbol'
            }
        })
            .then((response) => {
                if(response.data.success){
                    dispatch(viewProperty(response.data.data));
                    props.navigation.navigate('ContentPage',{
                       navigation: props.navigation
                    });
                } else {
                    Alert.alert('No properties found',
                        'Sorry, no listings have been found matching the criteria you entered. Please try again using a broader criteria.');
                }
            })
            .catch((error) => {
                alert(error);
            });
    }
    const propertyTitle = () => {
        let title = '';

        if (props.property.Bedrooms >= 1){
           title += props.property.Bedrooms + ' bed ';
        }

        if(props.property.Types[0].Name !== '')
            title += props.property.Types[0].Name

        if(props.property.TransactionTypeId === 1){
           title += ' for sale';
        } else {
            title += 'to rent';
        }

        if(props.property.Address.Street !== ''){
            title += ' in ' +props.property.Address.Street;

            if(props.property.Address.Town !== ''){
                title += ', '+props.property.Address.Town;
            }
        } else if(props.property.Address.Town !== ''){
            title += ' in '+props.property.Address.Town;
        }

       return title;
    }

    const image = require('../../../assets/img1.jpg')
    
    return (
        <TouchableOpacity
            onPress = {()=> propertySearch(props.property.TransactionTypeId, props.property.Id)}
            style={styles.product}
        >

            {/*img*/}
            <View style={styles.img}>
                <ImageBackground source={image} style={styles.bgimages}>
                <Image source={ props.property.FileUrl.MainPhoto + props.property.MainPhoto.Name} style={styles.imgbed}/>
                </ImageBackground>
            </View>

            {/*title*/}
            <Text style={styles.title}>{ propertyTitle() }</Text>

            {/*icons bed and bath*/}
            <View style={styles.icon}>
                <View style={{marginRight: 20, flexDirection: 'row'}}>
                    <Icon name='bed' size={25}/>
                    <Text style={{marginHorizontal: 10, fontSize: 20}}>{ props.property.Bedrooms }</Text>
                </View>

                <View style={{marginLeft: 20, flexDirection: 'row'}}>
                    <Icon name='bath' size={25}/>
                    <Text style={{marginHorizontal: 10, fontSize: 20}}>{ props.property.Bathrooms }</Text>
                </View>

            </View>

            {/*description*/}
            <View style={styles.description}>
                <Text style={{ fontSize: 20}} >
                    { props.property.Description.replace(/<(?:.|\n)*?>/gm, '').substr(0,100)}
                </Text>
            </View>

            {/*price*/}
            <View style={styles.pricebg}>
                <Text>
                    <Icon name='pound-sign'
                          size={20} color='white'/>
                </Text>
                <Text style={styles.price}> { props.property.Price.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," )}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    product: {
        overflow: 'hidden',
        justifyContent: "space-between",
        alignItems: "center",
        height: 500,
        borderRadius: 30,
        marginBottom: 20,
        shadowColor: '#171717',
        shadowOffset: 2,
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    bgimages: {
        resizeMode: "cover",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    img: {
        width: "100%",
        height: '45%',
        borderRadius: 30
    },
    imgbed: {
        width: "100%",
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginHorizontal:10,
        fontStyle: "italic"
    },
    icon: {
        flexDirection: 'row',
        alignItems: "center"
    },
    description: {
        height: 50,
        justifyContent: "center",
        marginHorizontal: 10
    },
    pricebg: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        backgroundColor: 'blue',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    price: {
        fontSize: 20,
        color: 'white',
        justifyContent: "center"

    }
})

export default PropertyCard;
