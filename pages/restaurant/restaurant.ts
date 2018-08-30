import { Component, OnInit} from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { CategoriesPage } from '../categories/categories';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';
/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  listRestaurant: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController,
   public ProductServiceProvider: ProductServiceProvider) {
  }
  ionViewDidLoad() {
    this.loadData();
  }

  loadData(){
    this.ProductServiceProvider.GetListRestaurant().subscribe(data =>{
      if (data.Code == 200) {
        this.listRestaurant = data.Result;
      }
    });
  }

	onCategory(id){
		this.navCtrl.push(CategoriesPage, id);
	}
	info(){
		 let alert = this.alertCtrl.create({
          title:'Thông tin',
          subTitle:'01 Nguyễn Công Trứ - Phone: 0123456789',
          buttons:['OK']
      });
        alert.present();  
	}
}
