// import {IArgsHistory} from '@/types/api';

// export function getArgsHistory(id: string): IArgsHistory {
//   const hours25InMs: number = 25 * 60 * 60 * 1000;
  
//   const argsHistory: IArgsHistory = {
//     id,
//     interval: 'h1',
//     fromEnd: hours25InMs
//   };
  
//   return argsHistory;
// }

export function getArgsHistory(id: string): any {
  const hours25InMs: number = 25 * 60 * 60 * 1000;
  const end: number = Date.now();
  const start: number = end - hours25InMs;

  const argsHistory: any = {
    id,
    interval: 'h1',
    start,
    end
  };

  return argsHistory;
}

export function getFirstCurrency(currentPage: number, limit: number): number {
  const last: number = currentPage * limit;
  const first: number = last - limit;
  return first;
}