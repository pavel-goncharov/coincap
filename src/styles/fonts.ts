import {css, FlattenSimpleInterpolation} from 'styled-components';
import OpenSansBoldTtf from 'assets/fonts/OpenSans-Bold.ttf';
import InterMediumTtf from 'assets/fonts/Inter-Medium.ttf';
import InterSemiBoldTtf from 'assets/fonts/Inter-SemiBold.ttf';
import InterBoldTtf from 'assets/fonts/Inter-Bold.ttf';
import InterRegularTtf from 'assets/fonts/Inter-Regular.ttf';
import InterExtraBoldTtf from 'assets/fonts/Inter-ExtraBold.ttf';
import {IFont} from 'types/ui';
import {Fonts} from 'styles/vars';

export const fonts: IFont[] = [
  {name: Fonts.OPEN_SANS_BOLD, path: OpenSansBoldTtf},
  {name: Fonts.INTER_MEDIUM, path: InterMediumTtf},
  {name: Fonts.INTER_SEMIBOLD, path: InterSemiBoldTtf},
  {name: Fonts.INTER_BOLD, path: InterBoldTtf},
  {name: Fonts.INTER_REGULAR, path: InterRegularTtf},
  {name: Fonts.INTER_EXTRABOLD, path: InterExtraBoldTtf}
];

export function initFontFaces(fonts: IFont[]): FlattenSimpleInterpolation[] {
  const fontFaces: FlattenSimpleInterpolation[] = [];
  
  fonts.forEach(font => {
    const fontFace = css`
      @font-face {
        font-family: '${font.name}';
        src: url(${font.path}) format('truetype');
      }
    `;
    fontFaces.push(fontFace);
  });
  
  return fontFaces;
}
