import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { onChangeLocation } from "../../../store/slice/PropertySlice";
import {Dropdown} from "react-native-element-dropdown";


const LocationField = (props) => {

    const dispatch = useDispatch(),
          data = useSelector((state) => (props.transactionTypeId === 1) ? state.locationSales.location : state.locationLettings.location);

    const [setDropdown] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={{marginTop: 30}}>Location</Text>
            <View style={{
                borderRadius: 50, borderStyle: 'solid', borderWidth: 1,
                marginBottom: 10, paddingVertical: 7
            }}>

                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    search
                    searchPlaceholder="Search"
                    labelField="item"
                    valueField="item"
                    label="Dropdown"
                    placeholder="All"
                    value={setDropdown}
                    onChange={(setDropdown) => dispatch(onChangeLocation(setDropdown.item))}
                    textError="Error"
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    dropdown: {
      marginHorizontal: 20
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
});

export default LocationField;
