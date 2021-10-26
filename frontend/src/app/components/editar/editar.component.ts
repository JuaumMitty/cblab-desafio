import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  usuarios: UsuarioModel = new UsuarioModel();
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  editarUsuario(id: number) {
    this.crudService.editarUsuario(id, this.usuarios).subscribe(usuario => {
    }, err => {
      console.log('Erro ao atualizar usuário', err);
    })
  }
}
