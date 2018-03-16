import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfiguracionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfiguracionProvider {

  public servidor: any;

  constructor(public http: HttpClient) {
    console.log('Hello ConfiguracionProvider Provider');
  }

  comprobarConexion(servidor){
    return this.http.get(servidor+'/comprobarconexion');
  }

}
