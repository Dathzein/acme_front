import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
const SecureStorage = require('secure-web-storage');
const SECRET_KEY = environment.secretkey;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
      key = CryptoJS.HmacSHA256(key, SECRET_KEY);
      return key.toString();
    },
    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      return data.toString();
    },
    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      return data.toString(CryptoJS.enc.Utf8);
    }
  });

  encriptar(data: any) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    return data.toString();
  }

  desencriptar(data: any) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);
    return data.toString(CryptoJS.enc.Utf8);
  }
}
