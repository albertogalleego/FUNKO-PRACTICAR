import { Component,Input} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { MiscomprasService } from 'src/app/services/miscompras.service';
import { Miscompras } from 'src/app/models/miscompras';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  public productosComprados:string="";
  public misCompras:Miscompras= new Miscompras();
  @Input() productorecibido: Producto = new Producto(); // Asumiendo que Producto tiene una propiedad 'id' de tipo string
  public carrito: { [key: string]: { producto: Producto, cantidad: number } } = {}; //es un diccionario clave(es el id que es el key) y el valor con dos valores(Objeto producto y cantidad)
  public total: number = 0;
  public jwtHelper = new JwtHelperService();
  public nombreUsuario:string="";

  constructor(public productosService:ProductosService,public miscomprasService:MiscomprasService){

  }

  ngOnChanges(): void {

    const productId = this.productorecibido._id; // Suponiendo que el ID es una cadena

  
    if(this.productorecibido.nombre!=""){
    if (this.carrito[productId]) {
      this.carrito[productId].cantidad++;
    } else {
      this.carrito[productId] = { producto: this.productorecibido, cantidad: 1 };
    }
  }

    this.calcularTotal();
  }

  calcularTotal() {
    this.total = 0;
    for (const key in this.carrito) {
      this.total += this.carrito[key].producto.precio * this.carrito[key].cantidad;
    }
    this.total=Number(this.total.toFixed(2))
  }
  formalizarCompra(){
  this.productosComprados="";
    for (const key in this.carrito) {
      this.carrito[key].producto.stock=this.carrito[key].producto.stock-this.carrito[key].cantidad;
      this.productosService.editarProducto(this.carrito[key].producto).subscribe(
        (res) => {
          console.log(res); // Manejar la respuesta del servidor si es necesario
          //alert('Compra realizada satisfactoriamente');
        },
        (error) => {
          console.error('Error al editar el producto:', error);
          //alert('Error al editar el producto');
        }
      );
      this.productosComprados=this.productosComprados+this.carrito[key].producto.nombre+":"+this.carrito[key].cantidad+" - "
    }

    const token=localStorage.getItem('token') //para pillar el nombre del usuario que esta haciendo la compra y asi saber que es lo que compra el usuario que se logueo
    if(token){
    const decodedtoken = this.jwtHelper.decodeToken(token);
    this.nombreUsuario=decodedtoken.nombre;
  }
  

  this.misCompras.idusuario=this.nombreUsuario; //se crea el modelo para crear las compras del usuario, el this.nombre usuario sale del token del nombre de la linea 69
  this.misCompras.productoscomprados=this.productosComprados;
  this.misCompras.totalcompra=this.total; 


  this.miscomprasService.crearmiscompras(this.misCompras) //todo esto se lleva a la parte final de mis compras
    .subscribe(res => {
      console.log(res);
      alert("¡Enhorabuena sus productos se han comprado satisfactoriamente");
     // this.router.navigate(['login']);
    });


    this.carrito={};
    this.calcularTotal()

  }
}
