import CryptoJS from "crypto-js";

const getHash = (timeStamp: string, privateKey: string, apiKey: string) => {
  const hash = CryptoJS.MD5(timeStamp + privateKey + apiKey).toString();
  return hash;
};

const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
const timeStamp = Date.now().toString();
const apiKey = "25baa0dabcd1b7db3228ce639db3eba9";
const privateKey = "6cd3701adcdfab4a2d6fec7518a8c4a8d44ff68d";
const hash = getHash(timeStamp, privateKey, apiKey);

export const urlGenerator = () => `${baseUrl}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`;
