import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BusquedaProvider } from '../../providers/busqueda/busqueda';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  codigo: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private busqueda: BusquedaProvider,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  escanear() {

    this.barcodeScanner.scan().then((barcodeData) => {
      this.codigo = barcodeData.text;
    }, (err) => {

    });

  }

  buscarProducto() {

    let seq = this.busqueda.buscarCodigo(this.codigo);

    seq.subscribe((res: any) => {
      if (res.length == 1) {
        let modal = this.modalCtrl.create('EditarPage', res);
        modal.present();
      } else {
        let seq2 = this.busqueda.buscarCodigoLista(this.codigo);

        seq2.subscribe((res: any) => {
          if (res.length == 1) {
          
            let modal = this.modalCtrl.create('CrearPage', res);
            modal.present();
          } else {
            let modal = this.modalCtrl.create('CrearPage', [{codigo: this.codigo, nombre:''}]);
            modal.present();
          }
        })



      }
    })

  }

}
