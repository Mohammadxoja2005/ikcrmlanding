import { configureStore } from "@reduxjs/toolkit";
// slices
import formSlice from "./features/formSlice";

export const store = configureStore({
    reducer: {
        form: formSlice
    }
})

export default store;