import { Component , OnInit } from '@angular/core';
import { JapanService } from 'src/app/japan.service';


@Component({
  selector: 'app-japtechnology',
  templateUrl: './japtechnology.component.html',
  styleUrls: ['./japtechnology.component.css']
})
export class JaptechnologyComponent implements OnInit {

  technology:any [] = []
  img: string = "../../../assets/technology.jpg"

  constructor(private _JapanService: JapanService) {}

  ngOnInit(): void {
    this._JapanService.getTecnolgy().subscribe({
      next:(Response)=> this.technology = Response.articles
    })
  }
}
