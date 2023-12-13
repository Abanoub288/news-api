import { Component , OnInit } from '@angular/core';
import { JapanService } from 'src/app/japan.service';

@Component({
  selector: 'app-japscience',
  templateUrl: './japscience.component.html',
  styleUrls: ['./japscience.component.css']
})
export class JapscienceComponent implements OnInit {

  science:any [] = []

  constructor(private _JapanService: JapanService) {}

  ngOnInit(): void {
    this._JapanService.getScinence().subscribe({
      next:(Response)=> this.science = Response.articles
    })
  }
}
