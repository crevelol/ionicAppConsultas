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
      consulta: 'Esto es una prueba 1'
    },
    {
      id_consulta: '2',
      titulo: 'Titulo 2',
      consulta: 'Esto es una prueba 2'
    },
    {
      id_consulta: '3',
      titulo: 'Titulo 3',
      consulta: 'Esto es una prueba 3'
    }
  ]

  constructor() { }

  getConsultas(){
    return [...this.consultas]
  }

  getConsulta(consultaId: String){
    return {
      ...this.consultas.find(consulta => {
        return consulta.id_consulta === consultaId
      })
    }
  }

  addConsulta(title: string, cons: string){
    this.consultas.push({
      id_consulta: (this.consultas.length + 1) + "",
      titulo: title,
      consulta: cons
    });
  }
}
