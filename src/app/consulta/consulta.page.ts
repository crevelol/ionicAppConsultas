import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from './consultas.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  consultas = []
  texto = "";
  user = '';

  constructor(private activatedRoute: ActivatedRoute, private consultasService: ConsultasService) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    this.texto = this.activatedRoute.snapshot.paramMap.get('texto');
    this.consultas = this.consultasService.getConsultasBusqueda(this.texto)
  }
}
