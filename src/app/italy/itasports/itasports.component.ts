import { Component , OnInit } from '@angular/core';
import { ItalyService } from 'src/app/italy.service';


@Component({
  selector: 'app-itasports',
  templateUrl: './itasports.component.html',
  styleUrls: ['./itasports.component.css']
})
export class ItasportsComponent implements OnInit {

  sports:any[] = []
  img: string = "../../../assets/5835222_1416598029.jpg"

  constructor(private _ItalyService: ItalyService) {}

  ngOnInit(): void {
    this._ItalyService.getSports().subscribe({
      next:(Response)=> this.sports = Response.articles
    })
  }
}
