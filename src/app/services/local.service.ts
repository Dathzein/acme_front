import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(
    private storage: StorageService
  ) { }

  async setJsonValue(key: string, value: any) {
    this.storage.secureStorage.setItem(key, value);
  }

  getJsonValue(key: string) {
    return this.storage.secureStorage.getItem(key);
  }

  removeToken(token: string, item: string) {

    let data = this.getJsonValue(item);
    delete data.token;
    data.token = token;
  }

  clearToken() {
    return this.storage.secureStorage.clear();
  }
  clearValues(x: any) {
    this.updateValueByKey(x);
  }

  private updateValueByKey(key: string) {
    let data = this.getJsonValue(key);
    let dataReplace = {};
    data = dataReplace;
    this.setJsonValue(key, data);
  }
}
