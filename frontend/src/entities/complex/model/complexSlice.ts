import { createSlice } from "@reduxjs/toolkit";
import { mockComplexes } from "../moсks/complexes";
import { Complex } from "../types/complex";

interface ComplexState {
    list: Complex;
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