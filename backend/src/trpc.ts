import {initTRPC} from '@trpc/server';
import {z} from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import {getAssets, getAssetOne, getHistory} from '@/controllers';

export const tPRC = initTRPC.create();

export const appRouter = tPRC.router({
  assets: tPRC.procedure
    .input(z
      .object({
        offset: z.number().nullable(),
        limit: z.number().nullable(),
        ids: z.string().nullable(),
      })
    )
    .query(({input}) => getAssets(input)),
  assetOne: tPRC.procedure
    .input(z
      .object({
        id: z.string(),
      })
    )
    .query(({input}) => getAssetOne(input)),
  history: tPRC.procedure
    .input(z
      .object({
        id: z.string(),
        interval: z.string(),
        start: z.number(),
        end: z.number(),
      })
    )
    .query(({input}) => getHistory(input)),
});

export type AppRouter = typeof appRouter;

export const tRPCMiddleware = trpcExpress.createExpressMiddleware({router: appRouter});