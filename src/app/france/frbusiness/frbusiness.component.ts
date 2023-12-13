import { Component , OnInit } from '@angular/core';
import { FranseService } from 'src/app/franse.service';


@Component({
  selector: 'app-frbusiness',
  templateUrl: './frbusiness.component.html',
  styleUrls: ['./frbusiness.component.css']
})
export class FrbusinessComponent implements OnInit {

  news:any [] = []
  img: string = "../../../assets/download (3).jpg"

  constructor(private _FranseService: FranseService) {}

  ngOnInit(): void {
    this._FranseService.getFrBusiness().subscribe({
      next: (Response) => this.news = Response.articles
    })
  }
}
