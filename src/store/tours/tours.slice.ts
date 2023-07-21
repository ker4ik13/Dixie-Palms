import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getData = async () => {
	const response = await fetch('https://64aff776c60b8f941af4f841.mockapi.io/server/tours');
	return response.json();
};

export async function tours() {
	const data = await getData();
	return data;
}

export const fetchTours = createAsyncThunk('tours/fetch', async () => tours());

const toursSlice = createSlice({
	name: 'tours',
	initialState: {
		tours: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTours.fulfilled, (state, action) => {
			state.tours = action.payload;
		});
	},
});

export const { getTours } = toursSlice.actions;
export default toursSlice.reducer;
