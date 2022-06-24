import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../service/api-service';

export const fetchTypeLettings = createAsyncThunk(
  'type/fetchTypeLettings',
  async (transactionTypeId) => {
    const response = await apiService.get('/property/type',{
        params:{
            'transaction-type' : transactionTypeId
        }
    });
    return response.data;
  }
)

const initialState = {
    type: [],
    isLoading: false,
    error: ''
}

export const TypeLettingsSlice = createSlice({
    name: 'typeLettings',
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchTypeLettings.pending]:(state, action) => {},
      [fetchTypeLettings.fulfilled]:(state, action) => {
          state.type = action.payload.Data;
          state.isLoading = true;
          state.error = null;
      },
      [fetchTypeLettings.rejected]:(state, action) => {}
    }
})

export const { } = TypeLettingsSlice.actions

export default TypeLettingsSlice.reducer
