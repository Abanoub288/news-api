import { Component , OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news:any [] = []

  constructor(private _NewsService: NewsService) {}

  ngOnInit(): void {
    this._NewsService.getNews().subscribe({
      next: (Response) => this.news = Response.articles
    })
  }
}
