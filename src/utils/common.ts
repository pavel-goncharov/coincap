import {Colors} from 'styles/vars';

export function roundNumber(number: number, power: number = 2): number {
  const rate: number = Math.pow(10, power); 
  return Math.floor(number * rate) / rate;
}

export function setColorText(title: string | number): Colors {
  const matcher: RegExp = /[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?/;
  const number: number = Number(`${title}`.match(matcher));
  
  switch(Math.sign(number)) {
    case (-1):
      return Colors.RED;
    case (1):
      return Colors.GREEN;
    default:
      return Colors.DARK_BLUE;
  }
}

export function getStrSignNumber(number: number): string {
  switch(Math.sign(number)) {
    case (-1):
      return '-';
    case (1):
      return '+';
    default:
      return '';
  }
}