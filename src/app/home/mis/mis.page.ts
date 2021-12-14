import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../consulta/consultas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis',
  templateUrl: './mis.page.html',
  styleUrls: ['./mis.page.scss'],
})
export class MisPage implements OnInit {
  consultas = []
  user = ''

  constructor(private consultasService: ConsultasService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    this.consultas = this.consultasService.getConsultaMis(this.user)
  }

}
