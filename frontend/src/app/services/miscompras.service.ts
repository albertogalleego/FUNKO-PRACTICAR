import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Miscompras } from '../models/miscompras';

@Injectable({
  providedIn: 'root'
})
export class MiscomprasService {

  micompraSeleccionado: Miscompras;
  miscompras: Array<Miscompras>
  

  constructor(private http: HttpClient) {
    this.miscompras = []
    this.micompraSeleccionado = new Miscompras();
  }


  mostrarMiscompras(): Observable<Miscompras[]> { // Cambiado el nombre del método y tipado del observable
    return this.http.get<Miscompras[]>('http://localhost:3000/api/miscompras'); // Tipado del resultado esperado
  }


  crearmiscompras(compras: Miscompras) {
    return this.http.post('http://localhost:3000/api/miscompras', compras);
  }




}


  