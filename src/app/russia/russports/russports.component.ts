import { Component , OnInit } from '@angular/core';
import { RussiaService } from 'src/app/russia.service';


@Component({
  selector: 'app-russports',
  templateUrl: './russports.component.html',
  styleUrls: ['./russports.component.css']
})

export class RussportsComponent implements OnInit {

  sports:any[] = []
  img: string = "../../../assets/download (3).png"

  constructor(private _RussiaService: RussiaService) {}

  ngOnInit(): void {
    this._RussiaService.getSports().subscribe({
      next:(Response)=> this.sports = Response.articles
    })
  }
}
