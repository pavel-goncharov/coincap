import {IArgsHistory} from 'types/api';

export function getArgsHistory(id: string): IArgsHistory {
  const hours25InMs: number = 25 * 60 * 60 * 1000;
  
  const argsHistory: IArgsHistory = {
    id,
    interval: 'h1',
    fromEnd: hours25InMs
  };
  
  return argsHistory;
}