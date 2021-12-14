import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios: Usuario[] = [
    {
      id_usuario: '1',
      nombre: 'Carlos Revelo',
      correo: 'carlos@hotmail.com',
      contrasena: '12345678'
    },
    {
      id_usuario: '2',
      nombre: 'Poleth Alvarez',
      correo: 'poleth@hotmail.com',
      contrasena: '12345678'
    }
  ]

  constructor() { }

  getUsuarios(){
    return [...this.usuarios]
  }

  getUsuario(email: String, password: String){
    return {
      ...this.usuarios.find(usuario => {
        return usuario.correo === email && usuario.contrasena === password
      })
    }
  }

  getUsuarioId(userId: String){
    return {
      ...this.usuarios.find(usuario => {
        return usuario.id_usuario === userId
      })
    }
  }

  addUsuario(nom: string, email: string, pass: string){
    this.usuarios.push({
      id_usuario: (this.usuarios.length + 1) + "",
      nombre: nom,
      correo: email,
      contrasena: pass
    });
  }

  /*addRespuesta(title: string, res: string, id: string){
    this.respuestas.push({
      id_respuesta: (this.respuestas.length + 1) + "",
      titulo: title,
      respuesta: res,
      id_consulta: id
    });
  }*/
}
