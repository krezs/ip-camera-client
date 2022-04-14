import { Component, OnInit } from '@angular/core';
import { Stream } from '../interfaces/stream';
import { StreamService } from '../services/stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public streams:Array<Stream> = [];
  constructor(private streamService: StreamService) { }

  ngOnInit(): void {
    this.streamService.getStreams().then((result: any) => {
      console.log(JSON.stringify(result));

    });
    // console.log(streams);
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
