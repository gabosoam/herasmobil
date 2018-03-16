import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private usuario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private usuarioproveedor: UserProvider) {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let seq = this.usuarioproveedor.login(this.usuario.value)
    seq.subscribe(res => {
      if (res) {
        this.navCtrl.setRoot('BusquedaPage');
      } else {
        
      }
    }, err => {
      
    })
  }

}
