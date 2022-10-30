import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  public isLoggedIn = false
  public userData= null
  public allproducts = []

  register(data:any): Observable<any>{
    return this._http.post("http://localhost:8000/user/register", data)
  }
  login(data:any): Observable<any>{
    return this._http.post("http://localhost:8000/user/login", data)
  }

  me(): Observable<any>{
    return this._http.get("http://localhost:8000/user/me")
  }
  logout(): Observable<any>{
    return this._http.get("http://localhost:8000/user/logout")
  }

  getallproducts() :Observable<any>{
    return this._http.get("http://localhost:8000/product/getallproducts")
  }
  getsingleproduct(id:string) : Observable<any>{
    return this._http.get(`http://localhost:8000/product/singleproduct/${id}`)
  }
}
