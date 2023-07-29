import { configureStore } from '@reduxjs/toolkit';
import bookTripReducer from './bookedTrips.slice';

export default configureStore({
	reducer: {
		bookTrip: bookTripReducer,
	},
});
