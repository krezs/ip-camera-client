import { Component, OnInit } from '@angular/core';
import { Stream } from '../interfaces/stream';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public streams:Array<Stream> = [];
  constructor() { }

  ngOnInit(): void {
    this.streams = [
      {
        name: 'hikvision01'
      },
      {
        name: 'hikvision02'
      }
      ,
      {
        name: 'hikvision03'
      }
    ]
  }

}
