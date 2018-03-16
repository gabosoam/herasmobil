import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component'
import { UserProvider } from '../../providers/user/user';
import { ConfiguracionProvider } from '../../providers/configuracion/configuracion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public user: UserProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private proveedor: ConfiguracionProvider) {

    storage.get('servidor').then((val) => {
      if (val == null) {
 
        this.navCtrl.setRoot('ConfiguracionPage');
        // this.myapp.openPage('ConfiguracionPage');
      } else {
 
        this.comprobarConexion(val);
      }
    });

  }

  comprobarConexion(servidor) {

    let loader = this.loadingCtrl.create({
      content: "Espere por favor.",
    });
    loader.present();

    let seq = this.proveedor.comprobarConexion(servidor);
    seq.subscribe((mensaje: any) => {
      if (mensaje) {
        if (mensaje.mensaje) {
          if (mensaje.mensaje = "Conexión establecida") {
            this.navCtrl.setRoot('LoginPage');
            this.proveedor.servidor = servidor;
         
            loader.dismiss();
          } else {
            loader.dismiss();
            this.navCtrl.setRoot('ConfiguracionPage');
          }

        } else {
          loader.dismiss();
          this.navCtrl.setRoot('ConfiguracionPage');
        }

      } else {
        loader.dismiss();
        this.navCtrl.setRoot('ConfiguracionPage');
      }
    }, (err) => {
      loader.dismiss();
      this.navCtrl.setRoot('ConfiguracionPage');
    })
  }

}
