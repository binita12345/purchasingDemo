import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompletedeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completedelivery',
  templateUrl: 'completedelivery.html',
})
export class CompletedeliveryPage {
	selectedProducts : any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"}]

    this.selectedProducts = navParams.get('selectedProducts');
    console.log("delivery this.selectedProducts.... " +JSON.stringify(this.selectedProducts));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedeliveryPage');
  }

  gotodeliveryList() {
  	this.navCtrl.push("DeliverylistPage", {'selectedProducts' : this.selectedProducts });
  }

  gotoHome(){
  	this.navCtrl.push("HomeappPage");
  }
  gotoCart(){
  	this.navCtrl.push("CartlistPage");
  }
  gotoRequest(){
  	this.navCtrl.push("RequestlistPage");
  }
  gotoProfile(){
  	this.navCtrl.push("ProfilePage");
  }
  gotoNotification(){
  	this.navCtrl.push("NotificationPage");
  }
  gotoInquiryProduct(){
  	this.navCtrl.push("InquiryproductdetailPage");
  }
  gotoInviteFriend(){
  	this.navCtrl.push("InvitefriendsPage");
  }
  gotoChangePassword(){
  	this.navCtrl.push("ChangepasswordPage");
  }

}
