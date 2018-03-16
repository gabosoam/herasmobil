import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoProvider } from '../../providers/producto/producto';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  private producto: FormGroup;

  productorecibido: any;

  marcas: any
  categorias: any
  unidades: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private productoProvider: UserProvider,
    public viewCtrl: ViewController) {
      

    this.productorecibido = navParams.data[0];

    this.producto = this.formBuilder.group({
      id: [this.productorecibido.id, Validators.required],
      codigo: [this.productorecibido.codigo, Validators.required],
      nombre: [this.productorecibido.nombre, Validators.required],
      marca: [this.productorecibido.marca.id, Validators.required],
      categoria: [this.productorecibido.categoria.id, Validators.required],
      unidad: [this.productorecibido.unidad.id, Validators.required],
      precio: [this.productorecibido.precio, Validators.required],
      stock: [this.productorecibido.stock, Validators.required],
      minimo: [this.productorecibido.minimo, Validators.required]
    });

    

    this.cargarMarcas();
    this.cargarCategorias();
    this.cargarUnidades();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

  cargarMarcas(){
    
   let seq= this.productoProvider.cargarMarcas();

   seq.subscribe(res=>{
    
     this.marcas=res
   })
  }

  cargarCategorias(){
    
    let seq= this.productoProvider.cargarCategorias();
 
    seq.subscribe(res=>{
     
      this.categorias=res
    })
   }

   cargarUnidades(){
    
    let seq= this.productoProvider.cargarUnidades();
 
    seq.subscribe(res=>{
     
      this.unidades=res
    })
   }

   editarProducto(){
    if (this.producto.valid) {
      let seq= this.productoProvider.editarProducto(this.producto.value);
      seq.subscribe(res=>{
       alert('Producto modificado correctamente');
       this.cerrar();
      })


    } else {
      alert('No se puede editar el producto')
    }
    // let seq= this.productoProvider.editarProducto(this.producto.value);
 
    // seq.subscribe(res=>{
     
    //   this.unidades=res
    // })

   }

   cerrar(){
    this.viewCtrl.dismiss();

   }

}
