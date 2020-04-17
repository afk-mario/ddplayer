import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { UserComponent } from './user/user.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: EpisodeListComponent, pathMatch: 'full' },
  { path: 'user', component: UserComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToHome }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
