import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConfiguracionProvider } from '../../providers/configuracion/configuracion';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {
  private configuracion: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private proveedor: ConfiguracionProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage) {

    this.configuracion = this.formBuilder.group({
      servidor: ['http://', Validators.required]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  comprobarConexion() {

    let loader = this.loadingCtrl.create({
      content: "Espere por favor.",
    });
    loader.present();

    let seq = this.proveedor.comprobarConexion(this.configuracion.value.servidor);
    seq.subscribe((mensaje: any) => {
      if (mensaje) {
        if (mensaje.mensaje) {
          if (mensaje.mensaje = "Conexión establecida") {
            loader.dismiss();
            let confirm = this.alertCtrl.create({
              title: 'Conexión establecida?',
              message: 'Desea guardar la configuración?',
              buttons: [
                {
                  text: 'Cancelar',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Aceptar',
                  handler: () => {
                    this.storage.set('servidor', this.configuracion.value.servidor);
                    this.navCtrl.setRoot('LoginPage');
                  }
                }
              ]
            });
            confirm.present();
          } else {
            loader.dismiss();
            alert('No se puede conectar')
          }

        } else {
          loader.dismiss();
          alert('No se puede conectar')
        }

      } else {
        loader.dismiss();
        alert('No se puede conectar')
      }
    }, (err) => {
      loader.dismiss();
      alert('No se puede conectar')
    })
  }

}
