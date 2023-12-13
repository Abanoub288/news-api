import { Component , OnInit } from '@angular/core';
import { JapanService } from 'src/app/japan.service';


@Component({
  selector: 'app-japbusiness',
  templateUrl: './japbusiness.component.html',
  styleUrls: ['./japbusiness.component.css']
})
export class JapbusinessComponent implements OnInit {

  news:any[] = []
  img: string = "../../../assets/download (7).jpg"

  constructor(private _JapanService: JapanService) {}

  ngOnInit(): void {
    this._JapanService.getBusiness().subscribe({
      next:(Response)=> this.news = Response.articles
    })
  }
}
