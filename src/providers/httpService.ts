/**
 * Created by luwenwei on 18/3/11.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
const apifiex:string = "http://192.168.10.188:8101/";
@Injectable()//标识一个类可以被注入器实例化
export class HttpService {
    constructor(private http:HttpClient){
    }

    getData(options:any){
        return this.http.get(apifiex + options.url,{params:options.params, withCredentials: true}).toPromise()
    }

    postData(options:any){
        return this.http.post(apifiex + options.url,{data:options.data}).toPromise();
    }
}