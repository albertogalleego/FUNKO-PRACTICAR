import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public envioaCarrito:Producto=new Producto();
  public productoejemplo:Producto=new Producto();
  public productos:Producto[]=[];

  public productosf:Producto[]=[]
  public productosd:Producto[]=[]
  public productosx:Producto[]=[]
  @Input() filtros:string="";
  @Output() productoaEnviar= new EventEmitter<Producto>();
constructor(private productosService:ProductosService){

}
//productos es todo lo que se ve toda la parte principal de la web



ngOnInit(): void {

  this.recogerProductos("",0);
}
ngOnChanges(): void {
 
  this.recogerProductos(this.filtros.split("_")[0],Number.parseInt(this.filtros.split("_")[1]));
  
}


  filtrarCategoria(cat:string){
  
    if(cat!=""){
  
        
      this.productosf=[];           
      for (let index = 0; index < this.productos.length; index++) {
       if(this.productos[index].categoria==cat){
      this.productosf.push(this.productos[index])
       }
      }
      this.productos=this.productosf
    }
  }
  filtrarPrecio(numero:number){ //esto es friltrar los productos
  this.productosd=[];
  this.productosf=[];
  this.productosx=[];
    for (let index = 0; index < this.productos.length; index++) {
  
     if(this.productos[index].precio<15){
  
        this.productosf.push(this.productos[index]);
  
     }else if(this.productos[index].precio<30){
  
      this.productosd.push(this.productos[index]);
  
    }else if(this.productos[index].precio>30){
  
      this.productosx.push(this.productos[index]);
  
    }
     
  
  
    }
    if(numero==1){ //precio del proudcto es esto
      this.productos=this.productosf
        }if(numero==2){
      this.productos=this.productosd
        }if(numero==3){
      this.productos=this.productosx
        }
  }
  
  recogerProductos(cat:string,numero:number){ //este metodo filtra la llamada al metodo de mostrar productos del service por lo cual nos enseña filtrados los productos seleccionados
      this.productosService.mostrarProductos()
      .subscribe(res=>{
        this.productos=res as Producto[];
        this.filtrarCategoria(cat); 
        this.filtrarPrecio(numero);
      })
    }
  
  enviarCarrito(x:Producto){

    this.envioaCarrito=x;
    this.productoaEnviar.emit(x);
    this.recogerProductos("",0);
    }
}
