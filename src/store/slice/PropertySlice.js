import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    property: [],
    propertyView:[],
    params:{},
    isLoading: false,
    error: ''
}

export const PropertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        onChangeLocation: (state,action) => {
            if(action.payload !== ''){
                state.params.location = action.payload;
            }
        },
        onChangeMaxPrice: (state, action) => {
             if(action.payload !== 100000000){
                state.params.maxprice = action.payload;
             } else {
               state.params.maxprice = 100000000;
             }
        },
        onChangeType: (state, action) => {
            state.params.propType = action.payload;
        },
        onChangeBedroomsField: (state, action) => {
           state.params.bed = action.payload
        },
        addProperty: (state, action) => {
          state.property = action.payload.Data;
        },
        viewProperty: (state, action) =>{
            state.propertyView = action.payload
        }
    },
})

export const { onChangeLocation, onChangeMaxPrice, onChangeType, onChangeBedroomsField, addProperty, viewProperty } = PropertySlice.actions

export default PropertySlice.reducer
