import { Component , OnInit } from '@angular/core';
import { ItalyService } from 'src/app/italy.service';


@Component({
  selector: 'app-itabusiness',
  templateUrl: './itabusiness.component.html',
  styleUrls: ['./itabusiness.component.css']
})
export class ItabusinessComponent implements OnInit {

  news:any[] = []
  img: string = "../../../assets/shutterstock_246313099.jpg"

  constructor(private _ItalyService: ItalyService) {}

  ngOnInit(): void {
    this._ItalyService.getBusiness().subscribe({
      next:(Response)=> this.news = Response.articles
    })
  }
}
