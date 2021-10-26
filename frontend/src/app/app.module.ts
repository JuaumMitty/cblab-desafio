import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './services/crud.service';

import { FormsModule } from '@angular/forms';
import { CriarComponent } from './components/criar/criar.component';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListarUsuariosComponent,
    CriarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
