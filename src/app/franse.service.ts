import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FranseService {

  constructor(private _HttpClient:HttpClient) { }

  getFrBusiness():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getSports(): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getHealth(): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getTecnolgy(): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getFrScinence(): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
}
