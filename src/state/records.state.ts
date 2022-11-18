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
            localStorage.setItem("records", JSON.stringify(state.value))
        },
        editRecordData: (state, action: PayloadAction<PatientRecord>) => {
            const index = state.value.findIndex((rec) => rec.sn == action.payload.sn)
            state.value[index] = action.payload;
            localStorage.setItem("records", JSON.stringify(state.value))
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateRecord, editRecordData } = recordSlice.actions

export default recordSlice.reducer