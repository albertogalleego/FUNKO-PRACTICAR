import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioSeleccionado: Usuario;
  usuarios: Array<Usuario>
  

  constructor(private http: HttpClient) {
    this.usuarios = []
    this.usuarioSeleccionado = new Usuario();
  }

  mostrarUsuarios() {
    return this.http.get('http://localhost:3000/api/usuarios');
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post('http://localhost:3000/api/usuarios', usuario);
  }


  editarUsuario(usuario: Usuario) {
    return this.http.put(`http://localhost:3000/api/usuarios/${usuario._id}`, usuario);
  }

  eliminarUsuario(id: string) {
    return this.http.delete(`http://localhost:3000/api/usuarios/${id}`);
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { nombre: username, contrasena: password };
    return this.http.post<any>('http://localhost:3000/api/usuarios/login', credentials)
  }
}


  

