import { Component , OnInit } from '@angular/core';
import { FranseService } from 'src/app/franse.service';


@Component({
  selector: 'app-frsciness',
  templateUrl: './frsciness.component.html',
  styleUrls: ['./frsciness.component.css']
})
export class FrscinessComponent implements OnInit {

  sciness:any[] = []
  img: string = "../../../assets/resize.jpg"

  constructor(private _FranseService: FranseService) {}

  ngOnInit(): void {
    this._FranseService.getFrScinence().subscribe({
      next: (Response) => this.sciness = Response.articles
    })
  }
}
