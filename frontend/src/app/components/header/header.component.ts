import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public mostrarCerrarSesion:boolean=false;
  title = 'frontend';
  public nombreUsuario: string = "Hola, ";
  public jwtHelper = new JwtHelperService();

  constructor(private router:Router){

  }
  irInicio(){
    this.router.navigate(['inicio']);
  }
  cerrarsesion(){
    localStorage.clear()
    window.location.reload();
  
  }
  ngOnInit(): void {
    // Obtener el token de almacenamiento local
    const token = localStorage.getItem('token');
  
    if (token) {
      // Decodificar el token para obtener información del usuario
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.nombreUsuario = this.nombreUsuario+decodedToken.nombre;
      this.mostrarCerrarSesion=true;
      
    }else{
      this.nombreUsuario="";
      this.mostrarCerrarSesion=false;
    } 
  }

}
