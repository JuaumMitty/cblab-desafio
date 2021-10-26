import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: UsuarioModel = new UsuarioModel();
  usuario: Array<any> = new Array();

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.crudService.listarUsuarios().subscribe(usuario => {
      this.usuario = usuario;
    }, erro => {
      console.log('Erro ao listar usuários', erro);
    })
  }

  listarUser(id: number) {
    this.crudService.listarUser(id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  deletarUsuario(id: number) {
    this.crudService.deletarUsuario(id).subscribe(usuario => {
      this.usuarios = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao deletar o usuário', err);
    })
  }

}
