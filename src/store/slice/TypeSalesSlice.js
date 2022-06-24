import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../service/api-service';

export const fetchTypeSales = createAsyncThunk(
  'location/fetchTypeSales',
  async (transactionTypeId) => {
    const response = await apiService.get('/property/type',{
        params:{
            'transaction-type' : transactionTypeId
        }
    });
    return response.data.data;
  }
)

const initialState = {
    type: [],
    isLoading: false,
    error: null
}

export const TypeSalesSlice = createSlice({
    name: 'typeSales',
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchTypeSales.pending]:(state, action) => {},
      [fetchTypeSales.fulfilled]:(state, action) => {
          state.type.push({'Name':'Any','Id':''});
          state.type = [...state.type,...action.payload.Data];
          state.error = null;
      },
      [fetchTypeSales.rejected]:(state, action) => {}
    }
})

export const { } = TypeSalesSlice.actions

export default TypeSalesSlice.reducer
