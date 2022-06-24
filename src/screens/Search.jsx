import React, { useEffect } from 'react';
import {View, StyleSheet} from "react-native";
import SearchForm from "../components/SearchForm/SearchForm";
import { useDispatch } from "react-redux";
import { fetchLocationSales} from "../store/slice/LocationSalesSlice";
import { fetchLocationLettings } from "../store/slice/LocationLettingsSlice";
import { fetchTypeSales } from "../store/slice/TypeSalesSlice";
import { fetchTypeLettings } from "../store/slice/TypeLettingsSlice";

const Search = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(props.transactionTypeId === 1? fetchLocationSales(props.transactionTypeId) : fetchLocationLettings(props.transactionTypeId));
        dispatch(props.transactionTypeId === 1? fetchTypeSales(props.transactionTypeId) : fetchTypeLettings(props.transactionTypeId));
    }, [dispatch]);


    return(
        <View style={styles.container}>
            <SearchForm navigation={ props.navigation } transactionTypeId = { props.transactionTypeId } style={styles.SearchForm}/>
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
export default Search;