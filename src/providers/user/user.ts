import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionProvider } from '../../providers/configuracion/configuracion';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  servidor: any;
  usuarioLoqueado: any;

  constructor(public http: HttpClient, conexion: ConfiguracionProvider,private storage: Storage,) {

    storage.get('servidor').then((val) => {
    
        this.servidor=val;
  
    });
   
    
  }

  login(usuario){
    return this.http.post(this.servidor+'/login', usuario);
  }

  cargarMarcas(){
    return this.http.get(this.servidor+'/marca')
  }

  cargarCategorias(){
    return this.http.get(this.servidor+'/categoria')
  }

  cargarUnidades(){
    return this.http.get(this.servidor+'/unidad')
  }

  editarProducto(producto){
    return this.http.put(this.servidor+'/producto/'+producto.id,producto)
  }

  crearProducto(producto){
    return this.http.post(this.servidor+'/producto',producto)
  }

}
