import { Component , OnInit } from '@angular/core';
import { EgyptService } from '../../egypt.service';


@Component({
  selector: 'app-egytechnology',
  templateUrl: './egytechnology.component.html',
  styleUrls: ['./egytechnology.component.css']
})
export class EgytechnologyComponent implements OnInit {

  tecnolg:any[] = []
  img: string = "../../assets/download (2).jpg"

  constructor(private _EgyptService: EgyptService) {}

  ngOnInit(): void {
    this._EgyptService.getTecnolgy().subscribe({
      next: (Response) => this.tecnolg = Response.articles
    })
  }
}
