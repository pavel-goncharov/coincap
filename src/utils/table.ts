import {ReactNode} from 'react';
import {Colors} from 'styles/vars';
import {getStrSignNumber, roundNumber, setColorText} from 'utils/common';

export function setColorTd(columns: number[], y: number, title: string | ReactNode): Colors {
  if(!columns || !columns.includes(y) || typeof(title) !== 'string') {
    return Colors.DARK_BLUE;
  } else {
    return setColorText(title);
  }
}

export function calcTableValue(num: string, symbol: string = '', isStart: boolean = true, isSign: boolean = false): string {
  let number: number = Number(num);
  if(!number) return num;

  let tableValue: string = addNumberIndex(number);

  if(isSign) {
    const sign: string = getStrSignNumber(Number(tableValue));
    tableValue = `${sign}${Math.abs(Number(tableValue))}`;
  }

  switch(true) {
    case(symbol && isStart):
      tableValue = symbol + tableValue;
      break;
    case(symbol && !isStart):
      tableValue += symbol; 
      break;
    default:
      break;
  }

  return tableValue;
}

export function addNumberIndex(number: number) {
  const trillion: number = Math.pow(10, 12);
  const billion: number = Math.pow(10, 9);
  const million: number = Math.pow(10, 6);
  const thousand: number = Math.pow(10, 3);

  switch(true) {
    case (number >= trillion):
      return roundNumber(number / trillion) + 't';
    case (number >= billion):
      return roundNumber(number / billion) + 'b';
    case (number >= million):
      return roundNumber(number / million) + 'm';
    case (number >= thousand):
      return roundNumber(number / thousand) + 'k';
    case (Math.abs(number) < 0.1 && Math.abs(number) !== 0):
      const power: number = watchNumber(Math.abs(number));
      return roundNumber(number, power).toString();
    default:
      return roundNumber(number).toString(); 
  }
}
 
function watchNumber(number: number): number {
  let power: number = 3;
  while (true) {
    let rate: number = Math.pow(10, power);
    let value: number = number * rate;
    if (value >= 10) break;
    power++;
  }
  return power;
} 