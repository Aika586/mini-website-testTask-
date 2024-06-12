import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://my-json-server.typicode.com/Aika586/servicesDB/" }),
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => "servicesData",
    }),

    getSingleService: builder.query({
      query: (id) => `servicesData/${id}`,
    }),
  }),
});

export const { useGetAllServicesQuery,useGetSingleServiceQuery} = servicesApi;