import { Injectable } from '@angular/core';
import { Respuesta } from './respuesta.model';
import { Comentario } from './comentario.model';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  private respuestas: Respuesta[] = [
    {
      id_respuesta: '1',
      titulo: 'Titulo 1',
      respuesta: 'Esto es una prueba de la respuesta 1',
      id_usuario: '1',
      id_consulta: '1'
    },
    {
      id_respuesta: '2',
      titulo: 'Titulo 2',
      respuesta: 'Esto es una prueba de la respuesta 2',
      id_usuario: '2',
      id_consulta: '1'
    },
    {
      id_respuesta: '3',
      titulo: 'Titulo 3',
      respuesta: 'Esto es una prueba de la respuesta 3',
      id_usuario: '2',
      id_consulta: '2'
    }
  ]

  private comentarios: Comentario[] = [
    {
      id_comentario: '1',
      comentario: 'Esto es una prueba de comentario 1',
      id_usuario: '1',
      id_consulta: '1'
    },
    {
      id_comentario: '2',
      comentario: 'Esto es una prueba de la comentario 2',
      id_usuario: '1',
      id_consulta: '1'
    },
    {
      id_comentario: '3',
      comentario: 'Esto es una prueba de la comentario 3',
      id_usuario: '1',
      id_consulta: '2'
    }
  ]

  constructor() { }

  getRespuestas(consultaId: String){
    return [
      ...this.respuestas.filter(respuesta => {
        return respuesta.id_consulta === consultaId
      })
    ]
  }

  getComentarios(respuestaId: String){
    return [
      ...this.comentarios.filter(comentario => {
        return comentario.id_consulta === respuestaId
      })
    ]
  }

  addRespuesta(title: string, res: string, id: string, user: string){
    this.respuestas.push({
      id_respuesta: (this.respuestas.length + 1) + "",
      titulo: title,
      respuesta: res,
      id_usuario: user,
      id_consulta: id
    });
  }

  addComentario(coment: string, id: string, user: string){
    this.comentarios.push({
      id_comentario: (this.comentarios.length + 1) + "",
      comentario: coment,
      id_usuario: user,
      id_consulta: id
    });
  }
}
