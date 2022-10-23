import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PatientRecord } from '../types'


const initialState: {
    value: PatientRecord[]
} = {
    value: []
};

export const recordSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        updateRecord: (state, action: PayloadAction<PatientRecord[]>) => {
            state.value = [...action.payload]
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateRecord } = recordSlice.actions

export default recordSlice.reducer