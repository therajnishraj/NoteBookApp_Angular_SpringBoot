import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ZIP_FILE_DOWNLOAD } from '../utility/common-component/common-url';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  isMobileDevice: any = false;
  mapObject: any = {
    map: "",
    updatesize: () => {
      var _me = this;
      setTimeout(function () {
        _me.mapObject.map.updateSize();
      }, 500);

    }
  };
  constructor(private http: HttpClient) { }



  downloadshpfile() {
    return this.http
      .get<any[]>(ZIP_FILE_DOWNLOAD)
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }
}
