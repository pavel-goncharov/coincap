import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {apiTags} from 'api/constants';

const appApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coincap.io/v2', 
  }),
  tagTypes: Object.values(apiTags),
  endpoints: () => ({})
});

export default appApi;