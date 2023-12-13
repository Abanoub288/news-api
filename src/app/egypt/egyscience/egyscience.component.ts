import { Component , OnInit } from '@angular/core';
import { EgyptService } from '../../egypt.service';


@Component({
  selector: 'app-egyscience',
  templateUrl: './egyscience.component.html',
  styleUrls: ['./egyscience.component.css']
})
export class EgyscienceComponent implements OnInit {

  science:any[] = []
  img: string = "../../ assets / download(1).png"

  constructor(private _EgyptService: EgyptService) {}

  ngOnInit(): void {
    this._EgyptService.getScinence().subscribe({
      next: (Response) => this.science = Response.articles
    })
  }
}
