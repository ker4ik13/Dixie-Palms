import { createSlice } from '@reduxjs/toolkit';

const bookedTrips:[] = [];


const bookedTripsSlice = createSlice({
	name: 'bookedTrips',
	initialState: bookedTrips,
	reducers: {
		addBookTrip(state, action) {
			console.log(state);
			console.log(action);
			state.bookedTrips.push(action.payload);
		},
	},
});

export const {addBookTrip} = bookedTripsSlice.actions;

export default bookedTripsSlice.reducer;
