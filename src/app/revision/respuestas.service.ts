import { Injectable } from '@angular/core';
import { Respuesta } from './respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  private respuestas: Respuesta[] = [
    {
      id_respuesta: '1',
      titulo: 'Titulo 1',
      respuesta: 'Esto es una prueba de la respuesta 1',
      id_consulta: '1'
    },
    {
      id_respuesta: '2',
      titulo: 'Titulo 2',
      respuesta: 'Esto es una prueba de la respuesta 2',
      id_consulta: '1'
    },
    {
      id_respuesta: '3',
      titulo: 'Titulo 3',
      respuesta: 'Esto es una prueba de la respuesta 3',
      id_consulta: '2'
    }
  ]

  constructor() { }

  getRespuesta(consultaId: String){
    return [
      ...this.respuestas.filter(respuesta => {
        return respuesta.id_consulta === consultaId
      })
    ]
  }

  addRespuesta(title: string, res: string, id: string){
    this.respuestas.push({
      id_respuesta: (this.respuestas.length + 1) + "",
      titulo: title,
      respuesta: res,
      id_consulta: id
    });
  }
}
