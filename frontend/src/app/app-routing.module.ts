import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarEditarUsuariosComponent } from './components/criar-editar-usuarios/criar-editar-usuarios.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'listarUsuarios', component: ListarUsuariosComponent },
  { path: 'cdUsuarios', component: CriarEditarUsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
