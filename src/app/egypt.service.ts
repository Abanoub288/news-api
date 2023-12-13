import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EgyptService {

  constructor(private _HttpClient:HttpClient) { }

  getBusiness():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
  getSports():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
  getHealth():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
  getTecnolgy():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
  getScinence():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
}
