import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the BusquedaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BusquedaProvider {

  servidor: any;

  constructor(public http: HttpClient,private storage: Storage) {
    storage.get('servidor').then((val) => {
    
      this.servidor=val;

  });
  }

  buscarCodigo(codigo){
    return this.http.get(this.servidor+'/producto?codigo='+codigo)
  }

  buscarCodigoLista(codigo){
    return this.http.get(this.servidor+'/lista?codigo='+codigo)
  }

}
