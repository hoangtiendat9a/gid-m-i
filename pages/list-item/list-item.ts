import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ListSeclectedPage } from '../list-seclected/list-seclected';


/**
 * Generated class for the ListItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-list-item',
  templateUrl: 'list-item.html',
})
export class ListItemPage {

  res: any = {};
  listFoods: any[] = [];

  constructor(public navCtrl: NavController,
    public ProductServiceProvider: ProductServiceProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadData(this.navParams.data);

    console.log(this.navParams.data);

  }

  listSelected(res) {
    this.navCtrl.push(ListSeclectedPage, res);
  }
  loadData(c_Id) {

    this.ProductServiceProvider.GetListFood(c_Id).subscribe(data => {
      if (data.Code == 200) {
        this.listFoods = data.Result;
      }
    });
  }

  placeOrder(f_Id, f_name, f_price) {
    let alert = this.alertCtrl.create({
      title: 'Đặt món này ?',
      message: f_name + ': ' + f_price + ' VNĐ',
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          handler: () => {
            console.log('Đã hủy');
          }
        },
        {
          text: 'Đặt',
          handler: () => {
            this.ProductServiceProvider.AddFood(f_Id).subscribe(data => {});
          }
        }
      ]
    });
    alert.present();

  }

}

