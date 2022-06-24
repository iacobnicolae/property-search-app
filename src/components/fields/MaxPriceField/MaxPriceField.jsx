import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { onChangeMaxPrice } from "../../../store/slice/PropertySlice";
import { Dropdown } from "react-native-element-dropdown";

const MaxPriceField = (props) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState(null);
    const MaxPriceForSales = [
        {  label:'no Max', value: 100000000},
        {  label:'£ 75,000', value: 75000},
        {  label:'£ 100,000', value: 100000},
        {  label:'£ 125,000', value: 125000},
        {  label:'£ 150,000', value: 150000},
        {  label:'£ 175,000', value: 175000},
        {  label:'£ 200,000', value: 200000},
        {  label:'£ 225,000', value: 225000},
        {  label:'£ 250,000', value: 250000},
        {  label:'£ 275,000', value: 275000},
        {  label:'£ 300,000', value: 300000},
        {  label:'£ 325,000', value: 325000},
        {  label:'£ 350,000', value: 350000},
        {  label:'£ 375,000', value: 375000},
        {  label:'£ 400,000', value: 400000},
        {  label:'£ 425,000', value: 425000},
        {  label:'£ 450,000', value: 450000},
        {  label:'£ 475,000', value: 475000},
        {  label:'£ 500,000', value: 500000},
        {  label:'£ 600,000', value: 600000},
        {  label:'£ 700,000', value: 700000},
        {  label:'£ 800,000', value: 800000},
        {  label:'£ 900,000', value: 900000},
        {  label:'£ 1,000,000', value: 1000000},
        {  label:'£ 1,250,000', value: 1250000},
        {  label:'£ 1,500,000', value: 1500000},
        {  label:'£ 1,750,000', value: 1750000},
        {  label:'£ 2,000,000', value: 2000000},
        {  label:'£ 2,250,000', value: 2250000},
        {  label:'£ 2,500,000', value: 2500000},
        {  label:'£ 2,750,000', value: 2750000},
        {  label:'£ 3,000,000', value: 3000000},
        {  label:'£ 4,000,000', value: 4000000},
        {  label:'£ 5,000,000', value: 5000000},
        {  label:'£ 6,000,000', value: 6000000},
        {  label:'£ 7,000,000', value: 7000000},
        {  label:'£ 8,000,000', value: 8000000},
        {  label:'£ 9,000,000', value: 9000000},
        {  label:'£ 10,000,000', value: 10000000},
    ]

    const MaxPriceForLettings = [
        {  label:'no Max', value: 100000000},
        {  label:'£ 400 per month', value: 400},
        {  label:'£ 425 per month', value: 425},
        {  label:'£ 450 per month', value: 450},
        {  label:'£ 475 per month', value: 475},
        {  label:'£ 500 per month', value: 500},
        {  label:'£ 525 per month', value: 525},
        {  label:'£ 550 per month', value: 550},
        {  label:'£ 575 per month', value: 575},
        {  label:'£ 600 per month', value: 600},
        {  label:'£ 650 per month', value: 650},
        {  label:'£ 700 per month', value: 700},
        {  label:'£ 750 per month', value: 750},
        {  label:'£ 800 per month', value: 800},
        {  label:'£ 850 per month', value: 850},
        {  label:'£ 900 per month', value: 900},
        {  label:'£ 950 per month', value: 950},
        {  label:'£ 1000 per month', value: 1000},
        {  label:'£ 1100 per month', value: 1100},
        {  label:'£ 1200 per month', value: 1200},
        {  label:'£ 1300 per month', value: 1300},
        {  label:'£ 1400 per month', value: 1400},
        {  label:'£ 1500 per month', value: 1500},
        {  label:'£ 1600 per month', value: 1600},
        {  label:'£ 1700 per month', value: 1700},
        {  label:'£ 1800 per month', value: 1800},
        {  label:'£ 1900 per month', value: 1900},
        {  label:'£ 2000 per month', value: 2000},
        {  label:'£ 2250 per month', value: 2250},
        {  label:'£ 2500 per month', value: 2500},
        {  label:'£ 2750 per month', value: 2750},
        {  label:'£ 3000 per month', value: 3000},
        {  label:'£ 4000 per month', value: 4000},
        {  label:'£ 5000 per month', value: 5000},
        {  label:'£ 6000 per month', value: 6000},
        {  label:'£ 7500 per month', value: 7500},
        {  label:'£ 8000 per month', value: 8000},
        {  label:'£ 9000 per month', value: 9000},
        {  label:'£ 10000 per month', value: 10000},
        {  label:'£ 12500 per month', value: 12500},
        {  label:'£ 15000 per month', value: 15000},
    ]



    return (
        <View style={styles.container}>
            <Text>{props.transactionTypeId === 1 ? 'Max Price' : 'Max Price (per month)'}</Text>
            <View style={{borderRadius: 50, borderStyle: 'solid', borderWidth: 1, paddingVertical: 7 }}>
            <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={ props.transactionTypeId  === 1 ? MaxPriceForSales : MaxPriceForLettings }
                search
                searchPlaceholder="Search"
                labelField="label"
                valueField="value"
                label="Dropdown"
                placeholder="No Max"
                value={value}
                onChange={item => {
                    setValue(item.value);
                    dispatch(onChangeMaxPrice(item.value))
                }}
                textError="Error"
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    dropdown: {
        marginHorizontal: 20
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});

export default MaxPriceField;
