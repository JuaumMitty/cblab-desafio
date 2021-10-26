import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    console.log(this.usuario);
    this.crud.cadastrarUsuario(this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.voltar();
    }, err => {
      console.log("Erro ao cadastrar: ", err);
    })
  }

  voltar() {
    return this.router.navigate(['/listarUsuarios']);
  }
}