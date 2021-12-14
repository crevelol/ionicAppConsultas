import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../consulta/consultas.service';

@Component({
  selector: 'app-mis',
  templateUrl: './mis.page.html',
  styleUrls: ['./mis.page.scss'],
})
export class MisPage implements OnInit {
  consultas = []
  id = '1'

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {
    this.consultas = this.consultasService.getConsultaMis(this.id)
  }

}
