import {LocalStorageKeys} from 'constants/localStorage';

export function setItem(key: LocalStorageKeys, value: any): void {
  const strValue: string = JSON.stringify(value);
  localStorage.setItem(key, strValue);
}

export function getItem(key: LocalStorageKeys): any {
  const valueStr: string = localStorage.getItem(key)!;
  const value: any = JSON.parse(valueStr);
  return value;
}