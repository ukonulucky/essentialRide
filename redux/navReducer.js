import { createSlice } from "@reduxjs/toolkit"

const createNavSlice = createSlice({
    name: "navSliceReducer",
    initialState: {
        origin: null,
        destination: null,
        travelTime: null
    },
    reducers: {
        setOrigin: (state, action) => {
           state.origin = action.payload
           console.log(state)
        },
        setDestination:(state, action)  => {
          state.destination = action.payload
        },
        setTravelTime: (state, action) => {
          console.log("distance is " + action)
          state.travelTime = action.payload
        }
     
    }
})


export const { setDestination, setOrigin, setTravelTime } = createNavSlice.actions




export const navSliceReducer = createNavSlice.reducer

