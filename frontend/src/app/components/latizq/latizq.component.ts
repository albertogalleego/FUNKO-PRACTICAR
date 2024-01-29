import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-latizq',
  templateUrl: './latizq.component.html',
  styleUrls: ['./latizq.component.css']
})
export class LatizqComponent {
  public filtro:string="";
  @Output() filtrosaEnviar =new EventEmitter<string>();
constructor(){
}

recibirFiltro(f:any){
this.filtro=f
this.filtrosaEnviar.emit(this.filtro);
}

ngOnChanges(): void {
  
}
}
//el componente izquierdo se compone la comunicacion de: inicio=>latizq=>filtros