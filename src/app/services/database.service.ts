import { Injectable, Input } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


 @Injectable()
 export class DatabaseService {

   private API_URL = 'https://iqecs8if91.execute-api.us-east-1.amazonaws.com/dev/form/';

   constructor(private http: Http) { }

   createPerson(item, description) {
     let headers = new Headers({'Content-Type' : 'application/json'});
     let options = new RequestOptions({ headers: headers});
     let INFO =  Object.assign(item, description);
     let body = JSON.stringify(INFO);
     return this.http.post(this.API_URL, body, options).map((res: Response) => res.json());
   }

   getInfo(id: string){
     return this.http.get(this.API_URL + id)
       .map((res:Response) => res.json());
   }

 }
