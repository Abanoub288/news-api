import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient: HttpClient) { }

  getNews():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3ccb04f9016f41bab401d547a2af4ab5')
  }
}
