import { Component , OnInit } from '@angular/core';
import { ItalyService } from 'src/app/italy.service';


@Component({
  selector: 'app-itascience',
  templateUrl: './itascience.component.html',
  styleUrls: ['./itascience.component.css']
})
export class ItascienceComponent implements OnInit {

  science:any [] = []
  img: string = "../../../assets/download (5).jpg"

  constructor(private _ItalyService: ItalyService) {}

  ngOnInit(): void {
    this._ItalyService.getScinence().subscribe({
      next:(Response) => this.science = Response.articles
    })
  }
}
