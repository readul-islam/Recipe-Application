import { baseApi } from '../redux/api';

const END_POINTS = {
	UPLOAD: () => '/image/add',
	GET: () => '/image/get',
};

const imageApi = baseApi.injectEndpoints({
	tagTypes: ['images'],
	endpoints: (builder) => ({
		imageUpload: builder.mutation({
			query: (credentials) => ({
				url: END_POINTS.UPLOAD(),
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['images'],
		}),
		getImages: builder.query({
			query: (credentials) => ({
				url: END_POINTS.GET(),
				method: 'GET',
				params: credentials,
			}),
			providesTags: ['images'],
		}),
	}),
});

export const {
	useImageUploadMutation,

	useGetImagesQuery,
} = imageApi;
