import { Component , OnInit} from '@angular/core';
import { JapanService } from 'src/app/japan.service';


@Component({
  selector: 'app-japhealth',
  templateUrl: './japhealth.component.html',
  styleUrls: ['./japhealth.component.css']
})
export class JaphealthComponent implements OnInit {

  health:any [] = []
  img: string = "../../../assets/japHealth.jpg"

  constructor(private _JapanService: JapanService) {}

  ngOnInit(): void {
    this._JapanService.getHealth().subscribe({
      next:(Response)=> this.health = Response.articles
    })
  }
}
