import { Component,EventEmitter, Output } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
public categorias:Categoria[]=[];
public categoria:string="";
public precio:number=0;
public filtros:string=" _0";
@Output() filtrosaEnviar =new EventEmitter<string>();

constructor(public categoriasService:CategoriasService){


}

enviarFiltros(c:string,n:number){
  this.filtros=c+"_"+n;
  this.filtrosaEnviar.emit(this.filtros);
}



ngOnInit(): void {
this.recogerCategorias()}

  recogerCategorias(){
    
    this.categoriasService.mostrarcategorias()
    .subscribe(res=>{
      this.categoriasService.categorias=res as Categoria[];

      console.log(res)
    })
  }
}
