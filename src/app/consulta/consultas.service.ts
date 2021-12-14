import { Injectable } from '@angular/core';
import { Consulta } from './consulta.model'

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private consultas: Consulta[] = [
    {
      id_consulta: '1',
      titulo: 'Titulo 1',
      consulta: 'Esto es una prueba 1',
      cerrado: true,
      id_usuario: '1'
    },
    {
      id_consulta: '2',
      titulo: 'Titulo 2',
      consulta: 'Esto es una prueba 2',
      cerrado: false,
      id_usuario: '1'
    },
    {
      id_consulta: '3',
      titulo: 'Titulo 3',
      consulta: 'Esto es una prueba 3',
      cerrado: false,
      id_usuario: '2'
    }
  ]

  constructor() { }

  getConsultas(){
    return [...this.consultas]
  }

  getConsultasBusqueda(wordToSearch){
    return [...this.consultas.filter(place => {
      const regex = new RegExp(wordToSearch, 'gi');
      
      return place.titulo.match(regex) || place.consulta.match(regex)
    })]
  }

  getConsulta(consultaId: String){
    return {
      ...this.consultas.find(consulta => {
        return consulta.id_consulta === consultaId
      })
    }
  }

  getConsultaMis(usuarioId: String){
    return [
      ...this.consultas.filter(consulta => {
        return consulta.id_usuario === usuarioId
      })
    ]
  }

  updateConsultaMis(consultId: String){
    this.consultas.find(consulta => {
        if(consulta.id_consulta === consultId){
          consulta.cerrado = true
        }
    })
  }

  addConsulta(title: string, cons: string){
    this.consultas.push({
      id_consulta: (this.consultas.length + 1) + "",
      titulo: title,
      consulta: cons,
      cerrado: false,
      id_usuario: '1'
    });
  }
}
