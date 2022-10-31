import {FC} from 'react';
import {RoutePaths} from 'router/router';

export interface IRoute {
  path: RoutePaths,
  element: FC
}