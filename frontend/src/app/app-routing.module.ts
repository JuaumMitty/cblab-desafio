import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './components/criar/criar.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'listarUsuarios', component: ListarUsuariosComponent },
  { path: 'cdUsuarios', component: CriarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
