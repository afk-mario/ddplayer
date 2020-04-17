import { Component, OnInit, Input} from '@angular/core';
import { ToDigitsPipe } from '../to-digits.pipe';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.css'],
  providers: [ ToDigitsPipe ]
})
export class EpisodeItemComponent implements OnInit {
  @Input() episode: any;

  constructor(private toDigits: ToDigitsPipe) { }

  ngOnInit(): void {
  }

}
