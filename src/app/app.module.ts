import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AgmCoreModule } from '@agm/core';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeItemComponent } from './episode-item/episode-item.component';
import { ToDigitsPipe } from './to-digits.pipe';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    EpisodeItemComponent,
    UserComponent,
    ToDigitsPipe,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGHeXzOQoyY_jaomoJpvAcyEU8nqTEvwU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
