import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from "../screens/Search";

const Tab = createMaterialTopTabNavigator();


function AppNavigator(props){
    const TransactionTypeIdSale = 1;
    const TransactionTypeIdLettings = 2;

    return (
        <Tab.Navigator
            initialRouteName="Sales"
            screenOptions={{
                tabBarPressColor: 'transparent',
                activeTintColor: '#fff',
                tabBarActiveTintColor: 'white',
                tabBarItemStyle: {
                    height: 30,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#022473',
                    height: '100%',
                    width: '49%',
                    borderRadius: 50,
                },
                tabBarStyle: {
                    marginTop: 20,
                    borderRadius: 50,
                    borderStyle: 'solid',
                    borderWidth: 3,
                    borderColor: '#022473',
                    backgroundColor: '#fff',
                    width: '90%',
                    marginHorizontal: 20,

                },

            }}

        >
            <Tab.Screen
                name="Sales"
                children={() => <Search navigation={props.navigation} transactionTypeId={TransactionTypeIdSale}/>}
                options={{
                    tabBarLabel: 'Sales',
                    tabBarInactiveTintColor: '#022473',
                    tabBarLabelStyle: {
                        fontSize: 16,
                        height: 40,
                        justifyContent: 'center'},
                }}

            />
            <Tab.Screen
                name="Lettings"
                children={() => <Search navigation={props.navigation} transactionTypeId={TransactionTypeIdLettings}/>}
                options={{
                    tabBarLabel: 'Lettings',
                    tabBarInactiveTintColor: '#022473',
                    tabBarLabelStyle: {
                        fontSize: 16,
                        height: 40,
                        justifyContent: 'center',
                    },

                }}
            />
        </Tab.Navigator>
    );
}
export default AppNavigator;
