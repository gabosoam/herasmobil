import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {
  servidor: any;
  constructor(public http: HttpClient, private storage: Storage) {
    storage.get('servidor').then((val) => {

      this.servidor = val;

    });
  }

  buscarServidor(){
    this.storage.get('servidor').then((val) => {


      this.servidor = val;

    });
  }

  cargarMarcas() {

    return this.http.get(this.servidor + '/marca')
  }

}
