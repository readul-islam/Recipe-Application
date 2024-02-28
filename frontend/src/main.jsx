import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CustomCookieConsent from './components/cookie/CustomCookieConsent.jsx';

import router from './components/main/routes/routes.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { ErrorBoundary } from 'react-error-boundary';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <ToastContainer /> */}
			<CustomCookieConsent />
			<CookiesProvider>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
			</CookiesProvider>
		</Provider>
	</React.StrictMode>
);

// function MyFallbackComponent({ error, resetErrorBoundary }) {
// 	return (
// 	  <div role="alert">
// 		<p>Something went wrong:</p>
// 		<pre>{error.message}</pre>
// 		<button onClick={resetErrorBoundary}>Try again</button>
// 	  </div>
// 	)
//   }
