import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../service/api-service';

export const fetchLocationSales = createAsyncThunk(
  'location/fetchLocationSales',
  async (transactionTypeId) => {
    const response = await apiService.get('/property/location',{
        params:{
            'transaction-type' : transactionTypeId
        }
    });
    return response.data.data;
  }
)

const initialState = {
    location: [],
    isLoading: false,
    error: null
}

export const LocationSalesSlice = createSlice({
    name: 'locationSales',
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchLocationSales.pending]:(state, action) => {},
      [fetchLocationSales.fulfilled]:(state, action) => {
          state.location.push({'item':'All'});
          action.payload.Data.map(item => state.location.push({'item': item} ))
          state.isLoading = true;
          state.error = null;
      },
      [fetchLocationSales.rejected]:(state, action) => {}
    }
})

export const { } = LocationSalesSlice.actions

export default LocationSalesSlice.reducer
