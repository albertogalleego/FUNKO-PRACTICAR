import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
public filtrosaEnviar:string=""
public filtro:string="";
public productoaCarrito:Producto=new Producto();
constructor(private router: Router) {
  }



  recibirProducto(f:Producto){
    this.productoaCarrito=f;
  }

  recibirFiltro(f:any){
    this.filtro=f
    this.filtrosaEnviar=this.filtro;
   }
irMiscompras(){
  this.router.navigate(['miscompras']);
}

  ngOnInit(): void {
    // Obtener el token de almacenamiento local
    const token = localStorage.getItem('token');

    if (token) {
     
      //this.recogerCategorias();
    } else {
      this.router.navigate(['login']);
    }
  }
  }