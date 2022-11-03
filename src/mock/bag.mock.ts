import {IPartInitBag} from 'types/bag';

export const mockIds: string[] = ['bitcoin', 'ethereum', 'tether'];

export const partInitBag: IPartInitBag = {
  currency: [
    {
      id: mockIds[0], 
      history: [
        {
          date: 1666523695089,
          number: 1,
          priceUsd: 19158.2236223111825587
        }
      ]
    },
    {
      id: mockIds[1],
      history: [
        {
          date: 1666523772809,
          number: 1,
          priceUsd: 1304.7502802068171964
        },
        {
          date: 1666523817954,
          number: 1,
          priceUsd: 1304.6402263206339640
        }
      ]
    },
    {
      id:  mockIds[2],
      history: [
        {
          date: 1666523858451,
          number: 1,
          priceUsd: 1.0003733161348173
        },
        {
          date: 1666523905269,
          number: 1,
          priceUsd: 1.0003913045474208
        },
        {
          date: 1666523940022,
          number: 1,
          priceUsd: 1.0003568661471072
        }
      ]
    }
  ],
  ids: mockIds
};