import { Component } from '@angular/core';
import { MiscomprasService } from 'src/app/services/miscompras.service';
import { Miscompras } from 'src/app/models/miscompras';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.component.html',
  styleUrls: ['./miscompras.component.css']
})
export class MiscomprasComponent {
public miscompras:Array<Miscompras>=[]
public jwtHelper = new JwtHelperService();
public totalCompras:number=0;



constructor(private miscomprasService:MiscomprasService,private router:Router){ //ponemos private porque solo vamos a utilizar en esta clase miscompras

  const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.recogerMiscompras(decodedToken.nombre)
      this.calcularTotal();
    } else {
      this.router.navigate(['login']);
    }
}

calcularTotal(){
  for (let index = 0; index < this.miscompras.length; index++) {
    this.totalCompras=this.totalCompras+this.miscompras[index].totalcompra;
  }

}
recogerMiscompras(usuariologado:string) {
  this.miscomprasService.mostrarMiscompras()
    .subscribe((res: Miscompras[]) => {
      this.miscomprasService.miscompras = res; // Guarda las compras en el servicio
      this.miscompras = this.miscomprasService.miscompras;

      // Filtrar el array para mantener solo elementos con el ID específico
      if (usuariologado) {
        this.miscompras = this.miscompras.filter(compra => compra.idusuario === usuariologado);
      }
      this.calcularTotal();

      console.log(this.miscompras); // El array filtrado con el ID específico
    });
}

}
