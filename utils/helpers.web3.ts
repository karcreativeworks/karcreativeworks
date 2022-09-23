//import { fromWei } from "web3-utils";
export const prettyPrintEth = (wei: string) => {
  return wei;
};

export const toHex = (num: number) => {
  return "0x" + num.toString(16);
};

export const fromHex = (hexString: string) => {
  return parseInt(hexString, 16);
};

export const printAddress = (_add: string) => {
  if (!_add) return "0x000";
  return (
    _add?.substr(0, 6).toUpperCase() +
    "..." +
    _add?.substr(_add.length - 4).toUpperCase()
  );
};

export const printBalance = (_bal: string) => {
  if (!_bal) return "0";
  return parseFloat(_bal).toFixed(3)?.toString()?.substring(0, 11);
};

export const getRandPrice = (_index: number) => {
  if (_index === 0) return "0.000";
  if (_index >= 0) return _index / 1000;
  return Math.floor(Math.random() * 999 + 1) / 1000;
};

/*export const printPrice = (_moralis: any, _price: number | string) => {
    return parseFloat(fromWei(_price.toString()))?.toFixed(3).toString();
  };*/
