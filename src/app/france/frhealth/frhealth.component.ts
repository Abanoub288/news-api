import { Component , OnInit } from '@angular/core';
import { FranseService } from 'src/app/franse.service';


@Component({
  selector: 'app-frhealth',
  templateUrl: './frhealth.component.html',
  styleUrls: ['./frhealth.component.css']
})
export class FrhealthComponent implements OnInit {

  health:any[] = []
  img: string = "../../../assets/frhealth.jpg"

  constructor(private _FranseService: FranseService){}

  ngOnInit(): void {
    this._FranseService.getHealth().subscribe({
      next:(Response)=> this.health = Response.articles
    })
  }
}
