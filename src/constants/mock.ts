import {IBagState} from 'store/slices/bag.slice';

export const mockInitBagState: IBagState = {
  usd: 10000,
  currency: [
    {
      id: 'bitcoin',
      name: 'Bitcoin', 
      symbol: 'BTC',
      priceUsd: 19160.9323781431503923, 
      history: [
        {
          date: 1666523695089,
          number: 1,
          priceUsd: 19158.2236223111825587
        }
      ]
    },
    {
      id: 'ethereum',
      name: 'Ethereum', 
      symbol: 'ETH',
      priceUsd: 1305.0594697391787766,
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
      id: 'tether',
      name: 'Tether', 
      symbol: 'USDT',
      priceUsd: 1.0004538407578747,
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
  ]
}