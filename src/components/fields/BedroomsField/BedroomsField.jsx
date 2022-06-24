import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { useDispatch } from "react-redux";
import {onChangeBedroomsField} from "../../../store/slice/PropertySlice";
import {Dropdown} from "react-native-element-dropdown";

const BedroomsField = (props) => {

    const dispatch = useDispatch();

    const Bedrooms = [
        {  Name:'Any', Id: 'any'},
        {  Name:'Studio +', Id: 0},
        {  Name:'1', Id: 1},
        {  Name:'2', Id: 2},
        {  Name:'3', Id: 3},
        {  Name:'4', Id: 4},
        {  Name:'5', Id: 5},
        {  Name:'6', Id: 6},
    ]
    const [value, setValue] = useState(null);
    const change = (id) => {
        dispatch(onChangeBedroomsField(id));
    }
    return (
        <View style={styles.container}>
            <Text>Bedrooms</Text>
            <View style={{borderRadius: 50, borderStyle: 'solid', borderWidth: 1, paddingVertical: 7 }}>
            <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={Bedrooms}
                search
                searchPlaceholder="Search"
                labelField="Name"
                valueField="Id"
                label="Dropdown"
                placeholder="Any"
                value={value}
                onChange={ item  => {
                    setValue(item.Id);
                    change(item.Id);
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

export default BedroomsField;
