import { Component , OnInit } from '@angular/core';
import { UnitedService } from '../../united.service';



@Component({
  selector: 'app-ustechnology',
  templateUrl: './ustechnology.component.html',
  styleUrls: ['./ustechnology.component.css']
})
export class UstechnologyComponent implements OnInit {

  technology:any[] = []
  img: string = "../../../assets/شركات-التكنولوجيا-الأمريكية.jpg"

  constructor(private _UnitedService: UnitedService) {}

  ngOnInit(): void {
    this._UnitedService.getTechnology().subscribe({
      next:(Response)=> this.technology = Response.articles
    })
  }
}
