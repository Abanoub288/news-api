import { Component , OnInit } from '@angular/core';
import { FranseService } from 'src/app/franse.service';


@Component({
  selector: 'app-frsports',
  templateUrl: './frsports.component.html',
  styleUrls: ['./frsports.component.css']
})
export class FrsportsComponent implements OnInit {

  sports:any[] = []
  img: string = "../../../assets/download (4).jpg"

  constructor(private _FranseService: FranseService) {}

  ngOnInit(): void {
    this._FranseService.getSports().subscribe({
      next: (Response) => this.sports = Response.articles
    })
  }
}
