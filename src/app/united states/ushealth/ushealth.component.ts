import { Component , OnInit } from '@angular/core';
import { UnitedService } from '../../united.service';


@Component({
  selector: 'app-ushealth',
  templateUrl: './ushealth.component.html',
  styleUrls: ['./ushealth.component.css']
})
export class UshealthComponent implements OnInit {

  health:any[] = []
  img: string = "../../assets/download (2).png"

  constructor(private _UnitedService: UnitedService) {}

  ngOnInit(): void {
    this._UnitedService.getHealth().subscribe({
      next:(Response)=> this.health = Response.articles
    })
  }
}
