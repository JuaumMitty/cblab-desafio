import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  listarUser(id: any): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/myapp/".concat(id));
  }

  listarUsuarios(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/myapp/");
  }

  cadastrarUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/myapp/", usuario);
  }

  editarUsuario(id: any, usuario: UsuarioModel): Observable<any> {
    return this.http.put("http://127.0.0.1:8000/myapp/" + id + "/", usuario)
  }

  deletarUsuario(id: any) {
    return this.http.delete("http://127.0.0.1:8000/myapp/".concat(id));
  }

}
