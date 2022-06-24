import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import LocationField from "../fields/LocationField/LocationField";
import MaxPriceField from "../fields/MaxPriceField/MaxPriceField";
import TypeField from "../fields/TypeField/TypeField";
import BedroomsField from "../fields/BedroomsField/BedroomsField";

import apiService from "../../service/api-service";
import { addProperty } from "../../store/slice/PropertySlice";
import { useDispatch, useSelector } from "react-redux";

const SearchForm = (props) => {

    const dispatch = useDispatch();
    const params = useSelector((state) => state.property.params);
    let searchParams = {};

    if(params.location !== '' && params.location !== 'All'){
      searchParams.location = params.location
    }

    if(params.maxprice !== 100000000){
      searchParams = {...searchParams, ...{'max-price': params.maxprice}}
    }

    if(params.propType !== ''){
      searchParams = {...searchParams, ...{'prop-type': params.propType}}
    }

    if(params.bed !== 'any'){
      searchParams = {...searchParams, ...{'min-bed': params.bed}}
    }

    const otherParams = {
      'expand': 'MainPhoto,Address,Types',
      'fields': 'Id,TransactionTypeId,Bedrooms,Bathrooms,Description,Price,Address.Street,Address.Town,Types.Id,Types.Name',
      'page': 1,
      'per-page': 20
    };

    const propertySearch = async (transactionTypeId) => {
         const path = transactionTypeId === 1 ? '/property/residential/sale' : '/property/residential/letting';
         await apiService.get(path, {
             params: {...searchParams,...otherParams}
         })
         .then((response) => {
            dispatch(addProperty(response.data.data));

            if(response.data.data.Count > 0){
              props.navigation.navigate('ResultSearch',{
                  transactionTypeId: transactionTypeId,
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

    return (
        <SafeAreaView style={styles.container} >
            <LocationField transactionTypeId = {props.transactionTypeId} />
            <MaxPriceField transactionTypeId = {props.transactionTypeId}/>
            <TypeField transactionTypeId = {props.transactionTypeId}/>
            <BedroomsField />

            <TouchableOpacity
                onPress = {()=>  propertySearch(props.transactionTypeId) }
                style={styles.btn}
            >
                <Text style={styles.text}>Search</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    btn: {
        backgroundColor: '#042778',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 10,

},
    text: {
        color: 'white',
        fontSize: 20,
    }
});
export default SearchForm;
