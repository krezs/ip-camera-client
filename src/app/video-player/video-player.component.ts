import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Hls from 'hls.js';
import { Stream } from '../interfaces/stream';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  private hls = new Hls({ debug: false, autoStartLoad: true, liveSyncDuration: 0 });

  @Input()
  public stream!: Stream

  @ViewChild('video_streaming', { static: true }) private readonly video: ElementRef<HTMLVideoElement> | any;

  constructor() {
  }

  ngOnInit(): void {
    if(this.stream) this.load(`http://192.168.6.100:8000/live/${this.stream.name}/index.m3u8`);
  }

  public load(currentVideo: string): void {
    if (Hls.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    }
  }

  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
    this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      this.video.muted = true;
      this.video.play();
    });
  }

}
