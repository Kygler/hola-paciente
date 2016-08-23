import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Incio de Sesión</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding class="login">
      
      <ion-item>
        <ion-input type="text" placeholder="Usuario"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input type="password" placeholder="Contraseña"></ion-input>
      </ion-item>
    </ion-content>
  `
})
export class Login {
  constructor(public navCtrl: NavController) {
  }
}
