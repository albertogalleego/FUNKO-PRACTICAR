import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';
import { Producto2 } from '../models/producto2';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoSeleccionado: Producto;
  productos: Array<Producto>
  

  constructor(private http: HttpClient) {
    this.productos = []
    this.productoSeleccionado = new Producto();
  }

  mostrarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:3000/api/productos');
  }
  crearProducto(producto: Producto2) {
    return this.http.post('http://localhost:3000/api/productos', producto);
  }


  editarProducto(producto: Producto): Observable<any> {
    return this.http.put(`http://localhost:3000/api/productos/${producto._id}`, producto);
  }  
  
  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/productos/${id}`);
    
  }
 
  

}


  
