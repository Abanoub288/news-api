import { Component , OnInit} from '@angular/core';
import { UnitedService } from '../../united.service';



@Component({
  selector: 'app-us-sports',
  templateUrl: './us-sports.component.html',
  styleUrls: ['./us-sports.component.css']
})
export class UsSportsComponent implements OnInit {

  sports:any[] = []
  img: string = "../../assets/download (1).jpg"

  constructor(private _UnitedService:UnitedService) {}

  ngOnInit(): void {
    this._UnitedService.getSports().subscribe({
      next: (response) => this.sports = response.articles
    })
  }
}
