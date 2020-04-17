import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnChanges, AfterViewInit {
  currentTime: number;
  isPlaying = false;
  @Input() episode: any;
  $player: HTMLAudioElement;

  @ViewChild('mediaPlayer') set playerRef(ref: ElementRef<HTMLAudioElement>) {
    this.$player = ref.nativeElement;
  }

  ngAfterViewInit() {
    this.play();
    this.$player.addEventListener('timeupdate', this.updateCurrentTime);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.$player == null) { return; }
    this.currentTime = 1;

    this.pause();
    this.$player.load();
    this.play();
  }

  pause() {
    this.$player.pause();
    this.isPlaying = false;
  }

  play() {
    this.$player.play();
    this.isPlaying = true;
  }

  updateCurrentTime({target})  {
    // console.log('current', target.currentTime);
    // this.currentTime  = target.currentTime;
  }
}
