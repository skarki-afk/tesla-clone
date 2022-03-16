import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "midMenu": ["Model S" ,"Model X", "Model Y", "Model 3", "Solar Panel","Solar Roof"] 
}

const menuSlice = createSlice({
    name : "menu",
    initialState,
    reducers: {}
})

export const selectMenu = state=>state.menu.midMenu
export default menuSlice.reducer