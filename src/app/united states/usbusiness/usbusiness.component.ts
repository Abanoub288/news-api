import { Component, OnInit } from '@angular/core';
import { UnitedService } from '../../united.service';

@Component({
  selector: 'app-usbusiness',
  templateUrl: './usbusiness.component.html',
  styleUrls: ['./usbusiness.component.css']
})
export class UsbusinessComponent implements OnInit {

  news:any[] = []

  constructor(private _UnitedService: UnitedService) {}

  ngOnInit(): void {
    this._UnitedService.getBusiness().subscribe({
      next: (response)=> this.news = response.articles
    })
  }
}
