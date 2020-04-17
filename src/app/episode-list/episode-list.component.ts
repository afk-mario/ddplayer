import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  active: any = null;
  episodes: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
      {
        allEpisodes(podcast_Slug: "detras-del-pixel", publish: true) {
          edges {
            node {
              slug
              image
              title
              episodeNumber
              dateCreated
              smallText
              duration
              audioSize
              audioOgg
              audioMp3
            }
          }
        }
      }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.episodes = result.data && result.data.allEpisodes.edges;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  public setActive(event, item) {
    this.active = item;
  }

}
