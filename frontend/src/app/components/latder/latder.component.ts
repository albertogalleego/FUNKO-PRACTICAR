import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-latder',
  templateUrl: './latder.component.html',
  styleUrls: ['./latder.component.css']
})
export class LatderComponent {
@Input() producto:Producto=new Producto();
public productoaCarrito:Producto= new Producto();
constructor(){

}
ngOnChanges(): void {
 this.productoaCarrito=this.producto;
  
}
ngOnInit(): void {
  
  
}
}
