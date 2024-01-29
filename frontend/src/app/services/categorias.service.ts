import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriaSeleccionado: Categoria;
  categorias: Array<Categoria>
  

  constructor(private http: HttpClient) {
    this.categorias = []
    this.categoriaSeleccionado = new Categoria();
  }
  mostrarcategorias() {
    return this.http.get('http://localhost:3000/api/categorias');
  }

  crearcategoria(categoria:Categoria ) {
    return this.http.post('http://localhost:3000/api/categorias', categoria);
  }

  editarcategoria(categoria: Categoria) {
    return this.http.put(`http://localhost:3000/api/categorias/${categoria._id}`, categoria);
  }

  eliminarcategoria(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/categorias/${id}`);
  }


}


  