import { Component , OnInit} from '@angular/core';
import { EgyptService } from '../../egypt.service';


@Component({
  selector: 'app-egybusiness',
  templateUrl: './egybusiness.component.html',
  styleUrls: ['./egybusiness.component.css']
})
export class EgybusinessComponent implements OnInit {

  news:any [] = [];
  img: string = "../../assets/19_2020-637427187158114790-811.jpg"

  constructor(private _EgyptService: EgyptService) {}

  ngOnInit(): void {
    this._EgyptService.getBusiness().subscribe({
      next: (response) => this.news = response.articles
    })
  }
}
