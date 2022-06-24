import {combineReducers, configureStore} from '@reduxjs/toolkit';
import PropertySlice from './slice/PropertySlice';
import LocationSalesSlice from "./slice/LocationSalesSlice";
import LocationLettingsSlice from "./slice/LocationLettingsSlice";
import TypeSalesSlice from "./slice/TypeSalesSlice";
import TypeLettingsSlice from "./slice/TypeLettingsSlice";


const rootReducer = combineReducers({
    property: PropertySlice,
    locationSales: LocationSalesSlice,
    locationLettings: LocationLettingsSlice,

    typeSales: TypeSalesSlice,
    typeLettings: TypeLettingsSlice,
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};
