import { Injectable } from '@angular/core';
declare var config_Ui: any;
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  config: any = {};

  constructor() { }

  getApi(urlKey: any) {
    
    return this.config.BACK_END_URLS + this.config.API_URL[urlKey];
  }
}
