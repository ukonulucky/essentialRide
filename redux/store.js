import { configureStore } from "@reduxjs/toolkit"
import {navSliceReducer}   from "./navReducer"

const store = configureStore({
    reducer: {
        nav: navSliceReducer
    }
})

export default store