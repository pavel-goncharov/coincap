import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {apiTags} from '@/api/constants';

const appApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', 
  }),
  tagTypes: Object.values(apiTags),
  endpoints: () => ({})
});

export default appApi;