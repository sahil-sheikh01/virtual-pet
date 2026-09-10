import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./petSlice"

const store = configureStore({
    reducer: {
        pet: petReducer
    }
});

export default store;