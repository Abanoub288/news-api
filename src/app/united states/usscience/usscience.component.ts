import { Component , OnInit } from '@angular/core';
import { UnitedService } from '../../united.service';


@Component({
  selector: 'app-usscience',
  templateUrl: './usscience.component.html',
  styleUrls: ['./usscience.component.css']
})
export class UsscienceComponent implements OnInit {

  science:any[] = []

  constructor(private _UnitedService: UnitedService) {}

  ngOnInit(): void {
    this._UnitedService.getScience().subscribe({
      next:(Response)=> this.science = Response.articles
    })
  }
}
