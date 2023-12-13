import { Component , OnInit} from '@angular/core';
import { EgyptService } from '../../egypt.service';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  health:any[] = []
  img: string = "../../assets/download.png"

  constructor(private _EgyptService: EgyptService) {}

  ngOnInit(): void {
    this._EgyptService.getHealth().subscribe({
      next: (Response) => this.health = Response.articles
    })
  }
}
