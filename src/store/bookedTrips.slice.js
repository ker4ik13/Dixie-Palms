import { createSlice } from '@reduxjs/toolkit';
const bookedTrip = [];
const bookedTripsSlice = createSlice({
    name: 'bookedTrip',
    initialState: {
        bookedTrip,
    },
    reducers: {
        addBookTrip(state, action) {
            state.bookedTrip[0] = action.payload;
        },
    },
});
export const { addBookTrip } = bookedTripsSlice.actions;
export default bookedTripsSlice.reducer;
