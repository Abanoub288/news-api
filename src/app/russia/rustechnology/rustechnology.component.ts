import { Component , OnInit } from '@angular/core';
import { RussiaService } from 'src/app/russia.service';


@Component({
  selector: 'app-rustechnology',
  templateUrl: './rustechnology.component.html',
  styleUrls: ['./rustechnology.component.css']
})
export class RustechnologyComponent implements OnInit {

  technonlogy:any [] = []
  img: string = "../../../assets/1-1506340.jpg"

  constructor(private _RussiaService: RussiaService) {}

  ngOnInit(): void {
    this._RussiaService.getTecnolgy().subscribe({
      next:(Response)=> this.technonlogy = Response.articles
    })
  }
}
