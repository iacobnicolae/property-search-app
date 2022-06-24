import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../service/api-service';

export const fetchLocationLettings = createAsyncThunk(
  'location/fetchLocationLettings',
  async (transactionTypeId) => {
    const response = await apiService.get('/property/location',{
        params:{
            'transaction-type' : transactionTypeId
        }
    });
    return response.data;
  }
)

const initialState = {
    location: [],
    isLoading: false,
    error: ''
}

export const LocationLettingsSlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchLocationLettings.pending]:(state, action) => {},
      [fetchLocationLettings.fulfilled]:(state, action) => {
          state.location.push({'item':'All'});
          action.payload.data.Data.map(item => state.location.push({'item': item} ))
      },
      [fetchLocationLettings.rejected]:(state, action) => {}
    }
})

export const { } = LocationLettingsSlice.actions

export default LocationLettingsSlice.reducer
