import { baseApi } from '../../api';

const END_POINTS = {
	LOGIN: () => '/auth/login',
	REGISTER: () => '/auth/register',
	LOGIN_WITH_GOOGLE: () => '/auth/google',
};

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => {
		login: builder.mutation({
			query: (credentials) => ({
				url: END_POINTS.LOGIN,
				method: 'POST',
				body: { ...credentials },
			}),
		});
		register: builder.mutation({
			query: (credentials) => ({
				url: END_POINTS.REGISTER,
				method: 'POST',
				body: { ...credentials },
			}),
		});

		loginWithGoogle: builder.mutation({
			query: (credentials) => ({
				url: '/auth/google',
				method: 'POST',
				body: credentials,
			}),
		});
	},
});

export const { useLoginWithGoogleMutation } = authApi;
