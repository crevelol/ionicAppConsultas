import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../consulta/consultas.service';
import { RespuestasService } from './respuestas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {
  id = ''
  consulta = {}
  respuestas = []
  tamano = 0

  constructor(private activatedRoute:ActivatedRoute, 
    private consultasService:ConsultasService, 
    private respuestasService:RespuestasService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consulta = this.consultasService.getConsulta(this.id)
    this.respuestas = this.respuestasService.getRespuesta(this.id)
    this.tamano = this.respuestas.length
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Escriba su respuesta',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Titulo',
        },
        {
          name: 'respuesta',
          type: 'textarea',
          placeholder: 'Respuesta',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Responder',
          handler: () => {
            this.respuestasService.addRespuesta('Ingreso prueba 1','Ingreso respuesta prueba 1',this.id)
            this.respuestas = this.respuestasService.getRespuesta(this.id)
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

}
