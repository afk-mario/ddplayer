import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  lat = 18.8840792;
  lng = -99.054808;

  constructor(public auth: AngularFireAuth) {
    if (!navigator) { return ; }
    navigator.geolocation.getCurrentPosition( pos => {
      this.lng = +pos.coords.longitude;
      this.lat = +pos.coords.latitude;
    });
  }

  ngOnInit(): void {
  }

}
