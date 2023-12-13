import { Component , OnInit } from '@angular/core';
import { RussiaService } from 'src/app/russia.service';


@Component({
  selector: 'app-rushealth',
  templateUrl: './rushealth.component.html',
  styleUrls: ['./rushealth.component.css']
})
export class RushealthComponent implements OnInit {

  health:any [] = []
  img:string = "../../../assets/Flag_of_the_President_of_Russia.svg"

  constructor(private _RussiaService: RussiaService) {}

  ngOnInit(): void {
    this._RussiaService.getHealth().subscribe({
      next:(Response)=> this.health = Response.articles
    })
  }
}
