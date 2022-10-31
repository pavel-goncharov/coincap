import {css, FlattenSimpleInterpolation} from 'styled-components';

export enum Displays {
  FLEX = 'flex',
  INLINE = 'inline-flex'
}

export enum Directions {
  ROW = 'row',
  COLUMN = 'column'
}

export enum Justifys {
  START = 'flex-start',
  BETWEEN = 'space-between',
  CENTER = 'center'
}

export enum Aligns {
  STRETCH = 'stretch',
  CENTER = 'center'
}

export enum Wraps {
  NOWRAP = 'nowrap',
  WRAP = 'wrap'
}

interface IFlex {
  d?: Displays;
  fd?: Directions;
  jc?: Justifys;
  ai?: Aligns;
  fw?: Wraps;
  g?: string;
}

export function flex(args?: IFlex): FlattenSimpleInterpolation {
  const d: string = args?.d || Displays.FLEX;
  const fd: string = args?.fd || Directions.ROW;
  const jc: string = args?.jc || Justifys.START;
  const ai: string = args?.ai || Aligns.STRETCH;
  const fw: string = args?.fw || Wraps.NOWRAP;
  const g: string = args?.g || '0px';

  return css`
    display: ${d};
    flex-direction: ${fd};
    justify-content: ${jc};
    align-items: ${ai};
    flex-wrap: ${fw};
    gap: ${g};
  `;
}