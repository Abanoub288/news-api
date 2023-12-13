import { Component , OnInit } from '@angular/core';
import { FranseService } from 'src/app/franse.service';


@Component({
  selector: 'app-frtechnology',
  templateUrl: './frtechnology.component.html',
  styleUrls: ['./frtechnology.component.css']
})
export class FrtechnologyComponent implements OnInit {

  technology:any[] = []
  img: string = "../../../assets/الشركات-الرقمية.webp"

  constructor(private _FranseService: FranseService) {}

  ngOnInit(): void {
    this._FranseService.getTecnolgy().subscribe({
      next:(Response)=> this.technology = Response.articles
    })
  }
}
