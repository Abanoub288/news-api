import { Component , OnInit} from '@angular/core';
import { JapanService } from 'src/app/japan.service';


@Component({
  selector: 'app-japsports',
  templateUrl: './japsports.component.html',
  styleUrls: ['./japsports.component.css']
})
export class JapsportsComponent implements OnInit {

  sports:any [] = []
  img: string = "../../../assets/Japanese_Sports.png"

  constructor(private _JapanService: JapanService) {}

  ngOnInit(): void {
    this._JapanService.getSports().subscribe({
      next:(Response)=> this.sports = Response.articles
    })
  }
}
