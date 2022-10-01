import {IRoute} from 'types/router';
import Currency from 'pages/Currency';
import Main from 'pages/Main';

export enum RoutePaths {
  REDIRECT = '*',
  MAIN = '/',
  CURRENCY = 'currency/:id'
};

export const routes: IRoute[] = [
  {path: RoutePaths.REDIRECT, element: Main},
  {path: RoutePaths.MAIN, element: Main},
  {path: RoutePaths.CURRENCY, element: Currency}
];