import {ReactNode} from 'react';
import {Colors} from 'styles/vars';

export function setColorTd(columns: number[], y: number, dataCell: string | ReactNode): Colors {
  if(!columns || !columns.includes(y) || typeof(dataCell) !== 'string') return Colors.DARK_BLUE;

  const matcher: RegExp = /[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?/;
  const number: number = Number(dataCell.match(matcher)!);
  
  switch(Math.sign(number)) {
    case (-1):
      return Colors.RED;
    case (1):
      return Colors.GREEN;
    default:
      return Colors.DARK_BLUE;
  }
}

export function calcTableValue(num: string, symbol: string = '', isStart: boolean = true): string {
  let number: number = Number(num);
  let tableValue: string = num;

  const trillion: number = Math.pow(10, 12);
  const billion: number = Math.pow(10, 9);
  const million: number = Math.pow(10, 6);
  const thousand: number = Math.pow(10, 3);

  switch(true) {
    case (number >= trillion):
      tableValue = roundNumber(number / trillion) + 't';
      break;
    case (number >= billion):
      tableValue = roundNumber(number / billion) + 'b';
      break;
    case (number >= million):
      tableValue = roundNumber(number / million) + 'm';
      break;
    case (number >= thousand):
      tableValue = roundNumber(number / thousand) + 'k';
      break;
    case (Math.abs(number) < 0.1 && Math.abs(number) !== 0):
      const power: number = watchNumber(Math.abs(number));
      tableValue = roundNumber(number, power).toString();
      break;
    default:
      tableValue = roundNumber(number).toString(); 
      break;
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

export function roundNumber(number: number, power: number = 2): number {
  const rate: number = Math.pow(10, power); 
  return Math.floor(number * rate) / rate;
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