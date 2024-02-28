import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com",
//   }),
//   tagTypes:["todo"],
//   endpoints: (builder) => ({
//     getTodos: builder.query({
//       query: () => {
//         const param = new URLSearchParams();
//         if(true){
//           param.append("name","actualValue")
//         }
//         return {
//           url: `/posts`,
//           method: "GET",
//           params:{limit:1}
//         }
//       },
//       providesTags:["todo"]
//     }),
//     postTodo : builder.mutation({
//       query: (body) => ({
//         url: `/posts`,
//         method: "POST",
//         body:body,
//       }),
//       invalidatesTags:["todo"]
//     })
//   }),
// });

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://recipebackend-seven.vercel.app/api/v1' }),
	endpoints: () => ({}),
});
