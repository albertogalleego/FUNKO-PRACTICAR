import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

//descifrar token


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(public usuarioService: UsuariosService,private router: Router){
    
  }

  registro(){
    this.router.navigate(['registro']);
  }

  login(form: NgForm) {
    if (form.valid) {
      const username = form.value.nombre;
      const password = form.value.contrasena;

      this.usuarioService
        .login(username, password)
        .pipe(
          tap((response) => {
            const token = response.token;

            if (token) {
              localStorage.setItem('token', token);
              
            } else {
              
            }
          })
        )
        .subscribe({
          next: (data) => {
            alert("Bienvenido "+username);
            if(username=="admin"){
              this.router.navigate(['admin']).then(() => {window.location.reload();
              });

            }else{
            this.router.navigate(['inicio']).then(() => {
              // Forzar un refrescamiento de la página
              window.location.reload();
            
            });
          }
          }, 
          error: (error) => {
            alert("No esta ese usuario registrado")
            //console.error('Error al iniciar sesión:', error);
          },
        });
    }  
  }
}