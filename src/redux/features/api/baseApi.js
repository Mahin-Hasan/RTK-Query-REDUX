import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // import carefuly


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`,
        }),
        getUsers: builder.query({
            query: () => '/users',
        }),
    }),
});

// according to redux get === query, other operation === mutations
//useGetPostsQuery is an built hook provided from redux || and this hook returns an object
export const { useGetPostsQuery, useGetPostByIdQuery } = baseApi;

export default baseApi;