import baseApi from "../../api";

const END_POINTS = {
  LOGIN: () => "/auth/login",
};

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    login: builder.mutation({
      query: (credentials) => ({
        url: END_POINTS.LOGIN,
        method: "POST",
        body: { ...credentials },
      }),
    });
  },
});

export const { useLoginMutation } = authApi;
