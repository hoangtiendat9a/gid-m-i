import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Services } from '../services';
/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }
  //FOOD
  public GetListFood(categoryId) {
    var data = {}

    return this.http.get(Services.ServerURL("Foods/GetList?categoryId=" + categoryId), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //CATEGORIES
  public GetListCategories(restaurantId) {
    var data = {

    }

    return this.http.get(Services.ServerURL("Categories/GetList?restaurantId=" + restaurantId), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //RESTAURANT
  public GetListRestaurant() {
    return this.http.get(Services.ServerURL("Restaurant/GetList"), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //ADD FOOD
  public AddFood(foodId) {
    return this.http.post(Services.ServerURL("Foods/Add?foodId=" + foodId), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //LIST SELECTED
  public GetListSelected() {

    return this.http.get(Services.ServerURL("Orders/GetListSelected"), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //DELETE
  public Delete(foodId) {

    return this.http.get(Services.ServerURL("Orders/Delete?foodId=" + foodId), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //DELETE ALL
  public DeleteAll() {

    return this.http.get(Services.ServerURL("Orders/DeleteAll"), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }

  //LOGIN
  public Login(username, password) {

    return this.http.post(Services.ServerURL("Accounts/Login?username=" + username + "&password=" + password), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //INFO
  public Info() {

    return this.http.get(Services.ServerURL("Orders/Info"), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }
  //CLOSE
  public Close() {

    return this.http.get(Services.ServerURL("Orders/Close"), {headers: Services.ContentHeaders})
    .map(m => Services.extractResult(m));
  }


}
