import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	token: null,
	isLoggedIn:null,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			
			console.log(action.payload)
			state.user = action.payload.userInfo;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		logOut: (state, action) => {
			state.user = null;
			state.token = null;
			state.isLoggedIn = null;
		},
	},
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
