import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestdetail',
  templateUrl: 'requestdetail.html',
})
export class RequestdetailPage {
	lists : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestdetailPage');
  }
  editProduct(){
    let modal = this.modalCtrl.create('EditmodalPage',{},{showBackdrop:true, enableBackdropDismiss:true});
    modal.present();

    modal.onDidDismiss(productId => {
      if(productId){
        // this.buyNow(productId)
      }       
     });
  }

  gotoproductDetail(){
    this.navCtrl.push("ProductdetailPage");
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