import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './tours/tours.slice';

export default configureStore({
	reducer: {
		tours: toursReducer,
	},
});
