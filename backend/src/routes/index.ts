import {initTRPC} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
// import {getAssets, getAssetOne, getHistory} from '@/controllers';
import {getAssets, getAssetOne, getHistory} from '../controllers';
import {zArgReqAssets, zArgsReqAssetOne, zArgsReqHistory} from '../types/coinCapApi';

export const tPRC = initTRPC.create();

export const appRouter = tPRC.router({
  assets: tPRC.procedure
    .input(zArgReqAssets)
    .query(({input}) => getAssets(input)),
  assetOne: tPRC.procedure
    .input(zArgsReqAssetOne)
    .query(({input}) => getAssetOne(input)),
  history: tPRC.procedure
    .input(zArgsReqHistory)
    .query(({input}) => getHistory(input)),
});

export type AppRouter = typeof appRouter;

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});

export const tRPCMiddleware = trpcExpress.createExpressMiddleware({router: appRouter, createContext});