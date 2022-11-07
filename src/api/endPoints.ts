import {generatePath} from 'react-router-dom';
import appApi from '@/api/api';
import {IAsset, IHistory, IArgsHistory, IArgsAssets} from '@/types/api';
import {apiTags} from '@/api/constants';

const enum ApiUrls {
  ASSETS = '/assets',
  ASSET_ONE = '/assets/:id',
  HISTORY = '/assets/:id/history'
}

const apiEndPoints = appApi.injectEndpoints({
  endpoints: (build) => ({
    getAssets: build.query<IAsset[], IArgsAssets>({
      query: (args) => {
        const {offset, limit, ids} = args;
        return {
          url: ApiUrls.ASSETS,
          params: {offset, limit, ids}
        }
      },
      transformResponse: (res: {data: IAsset[]}) => res.data,
    }),

    getAssetOne: build.query<IAsset, string>({
      query: (id) => generatePath(ApiUrls.ASSET_ONE, {id}),
      transformResponse: (res: {data: IAsset}) => res.data,
      providesTags: [apiTags.bag]
    }),

    getHistory: build.query<IHistory[], IArgsHistory>({
      query: (args) => {
        const {id, interval, fromEnd} = args;
        const end: number = Date.now();
        const start: number = end - fromEnd;
        return {
          url: generatePath(ApiUrls.HISTORY, {id}),
          params: {interval, start, end}
        } 
      },
      transformResponse: (res: {data: IHistory[]}) => res.data,
    })
  })
});

export const {
  useGetAssetsQuery,
  useLazyGetAssetsQuery,
  useGetAssetOneQuery,
  useGetHistoryQuery,
} = apiEndPoints;