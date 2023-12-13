import { Component , OnInit } from '@angular/core';
import { EgyptService } from '../../egypt.service';

@Component({
  selector: 'app-egysport',
  templateUrl: './egysport.component.html',
  styleUrls: ['./egysport.component.css']
})
export class EgysportComponent implements OnInit {

  sports:any[] = []
  img: string = "../../assets/download(1).jpg"

  constructor(private _EgyptService: EgyptService) {}

  ngOnInit(): void {
    this._EgyptService.getSports().subscribe({
      next: (response) => this.sports = response.articles
    })
  }
}
