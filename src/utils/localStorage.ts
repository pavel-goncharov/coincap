export enum LocalStorageKeys {
  BAG = 'bag',
  MAIN_PAG_ITEM = 'mainPagItem'
}

export function setItem(key: LocalStorageKeys, value: any): void {
  const strValue: string = JSON.stringify(value);
  localStorage.setItem(key, strValue);
}

export function getItem<T>(key: LocalStorageKeys): T {
  const valueStr: string = localStorage.getItem(key)!;
  const value: T = JSON.parse(valueStr);
  return value;
}