import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HeaderComponent } from './components/header/header.component';
import { LatizqComponent } from './components/latizq/latizq.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { LatderComponent } from './components/latder/latder.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MiscomprasComponent } from './components/miscompras/miscompras.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    InicioComponent,
    CarritoComponent,
    HeaderComponent,
    LatizqComponent,
    FiltrosComponent,
    LatderComponent,
    ProductosComponent,
    MiscomprasComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'registro', component: UsuariosComponent },
      { path: 'miscompras', component: MiscomprasComponent },
      { path: 'admin', component: AdminComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
