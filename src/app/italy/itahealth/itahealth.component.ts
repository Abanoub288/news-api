import { Component , OnInit } from '@angular/core';
import { ItalyService } from 'src/app/italy.service';


@Component({
  selector: 'app-itahealth',
  templateUrl: './itahealth.component.html',
  styleUrls: ['./itahealth.component.css']
})
export class ItahealthComponent implements OnInit {

  health:any[] = []
  img: string = "../../../assets/healthita.jpg"

  constructor(private _ItalyService: ItalyService) {}

  ngOnInit(): void {
    this._ItalyService.getHealth().subscribe({
      next:(Response) => this.health = Response.articles
    })
  }
}
