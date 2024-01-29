import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public contrasenac:string="";
public usuarios:Usuario[]=[];
  constructor(public usuarioService: UsuariosService,private router:Router){
  
  }

  
  addUser(form: NgForm) {
    this.usuarioService.mostrarUsuarios()
      .subscribe(res=> {
        this.usuarios=res as Usuario[]; //res es el reusltado que obtienes de un metodo de objeto
        const existeUsuario = this.usuarios.some(usuario => usuario.nombre === form.value.nombre);
        if (existeUsuario) {
          alert("Error: Ya existe un usuario con ese nombre");
        } else {
          if (this.contrasenac === this.usuarioService.usuarioSeleccionado.contrasena) { //usuario seleccionado sale del usario.service que esta en el constructor
            this.usuarioService.crearUsuario(form.value)
              .subscribe(res => {
                console.log(res);
                alert("Usuario registrado correctamente");
                this.router.navigate(['login']);
              });
          } else {
            alert("Las contraseñas deben coincidir");
          }
        }
      });
  }
  

  
}
