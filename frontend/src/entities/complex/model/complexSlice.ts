import { createSlice } from "@reduxjs/toolkit";
import { mockComplexes } from "../moсks/complexesMocks";
import { ComplexTypes } from "../types/complexTypes";

interface ComplexState {
    list: ComplexTypes;
}

const initialState: ComplexState = {
    list: mockComplexes,
};

const complexSlice = createSlice({
    name: "complex",
    initialState,
    reducers: {},
});

export default complexSlice.reducer;