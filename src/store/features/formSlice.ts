import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitForm = createAsyncThunk('/create', async (
    data: {
        token: string, source: string,
        fio?: string, phone?: string, deal_name?: string, responsible_id?: number
    }) => {

    return axios.post('https://itkey.ikcrm.uz/api/send-data', data)
})

const initialState: {
    isLoading: boolean
} = {
    isLoading: false
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(submitForm.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(submitForm.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(submitForm.rejected, (state) => {
            state.isLoading = true;
        })
    }
})

export const { } = formSlice.actions;
export default formSlice.reducer;