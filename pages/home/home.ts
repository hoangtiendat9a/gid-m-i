import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { RestaurantPage } from '../restaurant/restaurant';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }
    onLogin(){
    this.navCtrl.push(LoginPage);
  }
 
}
