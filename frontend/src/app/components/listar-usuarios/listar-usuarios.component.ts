import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuario: Array<any> = new Array();

  constructor(private crudService: CrudService) { }

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

}
