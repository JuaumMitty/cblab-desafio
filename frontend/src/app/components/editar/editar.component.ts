import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  usuarios: UsuarioModel = new UsuarioModel();
  id = this.route.snapshot.paramMap.get('id');
  constructor(private crudService: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario() {
    this.crudService.listarUser(this.id).subscribe(usuario => {
      this.usuarios = usuario;
    }, err => {
      console.log('Erro ao listar usuário', err);
    })
  }

  editarUsuario() {
    this.crudService.editarUsuario(this.id, this.usuarios).subscribe(usuario => {
      this.voltar();
    }, err => {
      console.log('Erro ao atualizar usuário', err);
    })
  }

  voltar() {
    return this.router.navigate(['/listarUsuarios']);
  }
}
