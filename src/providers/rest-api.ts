import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


/*
  Generated class for the RestAPI provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestAPI {

  DevAPI : any =  'http://ec2-34-199-69-254.compute-1.amazonaws.com:8292'; ;//'http://localhost:8292'; // //  'http://localhost:8292';

  constructor(public http: Http) {
    console.log('Hello RestAPI Provider');
  }

  doGetReportsData():Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });//x-www-form-urlencoded
    let options = new RequestOptions({ headers: headers });
    //  var body = {
    //     "license": data.license,
    //     "deviceID": data.deviceID,
    //   };
     return this.http.get(this.DevAPI+'/store/admin/reports',options).map(res => <any>res.json());
  }

}
