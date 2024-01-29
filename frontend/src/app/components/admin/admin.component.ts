import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto2 } from 'src/app/models/producto2';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public expression:boolean = false;
  public NUEVONOMBRE:string="";
  public nuevoProducto: Producto = new Producto();
  public productos:Producto[]=[];

  constructor(public productosService:ProductosService){
   this.recogerProductos
  }

  recogerProductos(){ //muestra todos los poroductos de la base de datos y los mete en un array
    this.productosService.mostrarProductos()
    .subscribe(res=>{
      this.productos=res as Producto[];
      
    })
  }
  eliminarProducto(prod:string){
    const confirmacion = confirm('¿Estás seguro de eliminar este producto?');

    if (confirmacion) {
      this.productosService.eliminarProducto(prod).subscribe(response => {
          alert("Producto eliminado")
      window.location.reload();
      });    } else {
    
    }
    
  }
 mostrarocultar(){
  this.expression = !this.expression; // Cambia el estado de la variable cuando se hace clic en el checkbox
 }
  editarProducto(){
  for (let index = 0; index < this.productos.length; index++) {

  if(this.productos[index].nombre==this.nuevoProducto.nombre){
    this.productos[index].nombre=this.NUEVONOMBRE;
    this.productos[index].categoria=this.nuevoProducto.categoria
    this.productos[index].stock=this.nuevoProducto.stock
    this.productos[index].precio=this.nuevoProducto.precio

    this.productosService.editarProducto(this.productos[index]).subscribe(
      (res) => {
          alert("Se edito el producto satisfactoriamente")
        console.log(res); // Manejar la respuesta del servidor si es necesario
        //alert('Compra realizada satisfactoriamente');
      },
      (error) => {
        console.error('Error al editar el producto:', error);
        //alert('Error al editar el producto');
      }
    );
  }
    
  }
  }
  agregarProducto(){
    
    // Verificar si el nuevo producto tiene datos válidos antes de enviarlo
    
    if (this.nuevoProducto.nombre && this.nuevoProducto.stock && this.nuevoProducto.precio && this.nuevoProducto.categoria) {
      this.productosService.crearProducto(this.nuevoProducto)
      .subscribe(res => {
        console.log(res);
        alert("Producto añadido correctamente");
      });
  }
  }
}
