import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {onChangeType} from "../../../store/slice/PropertySlice";
import {Dropdown} from "react-native-element-dropdown";

const TypeField = (props) => {

    const dispatch = useDispatch(),
          data = useSelector((state) => (props.transactionTypeId === 1) ? state.typeSales.type : state.typeLettings.type);

    const [setDropdown] = useState(null);

    return (
        <View style={styles.container}>
            <Text>Type</Text>
            <View style={{borderRadius: 50, borderStyle: 'solid', borderWidth: 1, paddingVertical: 7 }}>
            <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={data}
                search
                searchPlaceholder="Search"
                labelField="Name"
                valueField="Id"
                label="Dropdown"
                placeholder="Any"
                value={setDropdown}
                onChange={(setDropdown) => dispatch(onChangeType(setDropdown.Id))}
                textError="Error"
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
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

export default TypeField;
