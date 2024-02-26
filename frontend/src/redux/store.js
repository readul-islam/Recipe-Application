import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/auth/authSlice';
import { baseApi } from './api';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
};
const rootReducer = combineReducers({
	auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: {
		root: persistedReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(baseApi.middleware),
});
export let persistor = persistStore(store);
