import { Component , OnInit } from '@angular/core';
import { RussiaService } from 'src/app/russia.service';


@Component({
  selector: 'app-russcience',
  templateUrl: './russcience.component.html',
  styleUrls: ['./russcience.component.css']
})
export class RusscienceComponent implements OnInit {

  science:any[] = []
  img: string = "../../../assets/Untitled-3.png"

  constructor(private _RussiaService: RussiaService) {}

  ngOnInit(): void {
    this._RussiaService.getScinence().subscribe({
      next:(Response)=> this.science = Response.articles
    })
  }
}
