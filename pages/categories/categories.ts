import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  
  listCategories: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ProductServiceProvider: ProductServiceProvider) {
  }
  ionViewDidLoad() {
    this.loadData(this.navParams.data);
        console.log(this.navParams.data);
  }

  loadData(restaurantId){
    this.ProductServiceProvider.GetListCategories(restaurantId).subscribe(data =>{
      if (data.Code == 200) {
        this.listCategories = data.Result;
      }
    });
  }

  listItem(cateId){
  	this.navCtrl.push(ListItemPage,cateId);
  }

}
