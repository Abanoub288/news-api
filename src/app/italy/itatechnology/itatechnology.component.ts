import { Component , OnInit } from '@angular/core';
import { ItalyService } from 'src/app/italy.service';


@Component({
  selector: 'app-itatechnology',
  templateUrl: './itatechnology.component.html',
  styleUrls: ['./itatechnology.component.css']
})
export class ItatechnologyComponent implements OnInit {

  technology:any[] = []
  img: string = "../../../assets/technologyita.jpg"

  constructor(private _ItalyService: ItalyService) {}

  ngOnInit(): void {
    this._ItalyService.getTecnolgy().subscribe({
      next:(Response)=> this.technology = Response.articles
    })
  }
}
