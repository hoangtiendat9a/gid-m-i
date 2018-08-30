import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { RestaurantPage } from '../restaurant/restaurant';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //username: string;
  //password: string;
  account: any[] = [];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, public ProductServiceProvider: ProductServiceProvider,public navParams: NavParams) {

  }

  login(username, password){
      let alert = this.alertCtrl.create({
          title:'Thông báo',
          subTitle:'Sai thông tin đăng nhập !!!',
          buttons:['OK']
      });

      this.ProductServiceProvider.Login(username, password).subscribe(data => {
        if(data.Code == 200){
          this.account = data.Result;
          this.navCtrl.push(RestaurantPage);
        }else{
          alert.present();
        }
      });
  }
 
}
