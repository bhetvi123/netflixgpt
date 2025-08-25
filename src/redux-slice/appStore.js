import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const appStore = configureStore(
    {
        reducer:{
            cart:userSlice,
        },
    }
);
export default appStore;