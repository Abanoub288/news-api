import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UnitedService {

  constructor(private _HttpClient:HttpClient) { }

  getBusiness():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getSports():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getHealth():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getScience():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }

  getTechnology():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
}
