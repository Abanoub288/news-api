import { Component , OnInit } from '@angular/core';
import { RussiaService } from 'src/app/russia.service';


@Component({
  selector: 'app-rusbusiness',
  templateUrl: './rusbusiness.component.html',
  styleUrls: ['./rusbusiness.component.css']
})
export class RusbusinessComponent implements OnInit {

  business:any[] = []
  img: string = "../../../assets/848.jpg"

  constructor(private _RussiaService: RussiaService) {}

  ngOnInit(): void {
    this._RussiaService.getBusiness().subscribe({
      next:(Response)=> this.business = Response.articles
    })
  }
}
