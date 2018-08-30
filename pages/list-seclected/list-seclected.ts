import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { FinishPage } from '../finish/finish';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import * as $ from 'jquery';

/**
 * Generated class for the ListSeclectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-list-seclected',
  templateUrl: 'list-seclected.html',
})
export class ListSeclectedPage {
  listSelected: any[] = [];
  public res: any = {};
  constructor(public navCtrl: NavController,
   public navParams: NavParams,public ProductServiceProvider: ProductServiceProvider,
   public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

    this.loadData();
  }

  loadData(){
     this.ProductServiceProvider.GetListSelected().subscribe(data=>{
       if (data.Code == 200) {
         this.listSelected = data.Result;
       }
     });
     this.ProductServiceProvider.Info().subscribe(data=>{
      if (data.Code == 200) {
        this.res = data.Result;
        console.log(this.res);
      }
    });
  }

  close(){
    let alert = this.alertCtrl.create({
      title: 'Đóng phiên đặt',
      message: '*Lưu ý: Gọi đặt hàng trước khi kết thúc phiên đặt này ?',
      buttons: [
        {
          text: 'Quay lại',
          role: 'cancel',
          handler: () => {
            console.log('Đã hủy');
          }
        },
        {
          text: 'Đồng ý',
          handler: () => {
            
            $.ajax({
                url : "http://localhost:58803/api/Orders/Close",
                type : "get",
                dataType : 'text',
                data : {},
                // data: tập hợp các biến dữ liệu gửi lên sever (VD : id: "1", email: "abc@gmail.com")
                success : function(){
                  location.reload();
                },
                error : function(){
                  console.log('error')
                }
              });
            
          }
        }
      ]
    });
    alert.present();
  	
  }
   // Tong gia
   getTotal(){
      var total = 0;
      for(var i = 0; i < this.listSelected.length; i++){
          var product = this.listSelected[i];
          total += (product.Price * product.Qty);
      }
      return total;
  }
  // So luong
  count(){
      var sl = 0;
      for (var i = 0; i < this.listSelected.length; i++) {
        var product = this.listSelected[i];
        sl += product.Qty;
      }
      return sl;
  }
  deleteFood(f_Id){
        let alert = this.alertCtrl.create({
        title: 'Xóa món',
        message: 'Bạn muốn xóa món này?',
        buttons: [
          {
            text: 'Hủy',
            role: 'cancel',
            handler: () => {
              console.log('Đã hủy');
            }
          },
          {
            text: 'Xóa',
            handler: () => {
              this.ProductServiceProvider.Delete(f_Id).subscribe(data => {});
            }
          }
        ]
      });
      alert.present();
  }

  deleteAll(){
    let alert = this.alertCtrl.create({
    title: 'Xóa',
    message:'Xóa hết các món đã đặt ?',
    buttons: [
      {
        text: 'Hủy',
        role: 'cancel',
        handler: () => {
          console.log('Đã hủy');
        }
      },
      {
        text: 'Xóa',
        handler: () => {
          this.ProductServiceProvider.DeleteAll().subscribe(data => {});
          
        }
      }
    ]
  });
  alert.present();
  // location.reload();
    // $.ajax({
    //   url : "http://localhost:58803/api/Orders/DeleteAll",
    //   // url: đường dẫn tới file kết quả
    //   type : "get",
    //   // type: 1 trong 2 phương thức get và post (giống như thuộc tính method trong form)
    //   dataType : 'text',
    //   //dataType: dữ liệu trả về (json, xml,...)
    //   data : {},
    //   // data: tập hợp các biến dữ liệu gửi lên sever (VD : id: "1", email: "abc@gmail.com")
    //   success : function(){
    //     console.log('OKK')
    //   },
    //   // success: hàm chạy khi nhận dữ liệu thành công
    //   error : function(){
    //     console.log('error')
    //   }
    //   // error: hàm chạy khi nhận dữ liệu thất bại
    // });

  }

  //show info


}
