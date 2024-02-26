import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './components/main/routes/routes.jsx';
import './index.css';
import CustomCookieConsent from './components/cookie/CustomCookieConsent.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<CustomCookieConsent />
			<CookiesProvider>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
			</CookiesProvider>
		</Provider>
	</React.StrictMode>
);
