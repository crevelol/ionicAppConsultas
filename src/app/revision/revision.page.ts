import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../consulta/consultas.service';
import { RespuestasService } from './respuestas.service';
import { UsuariosService } from '../login/usuarios.service';
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
  nombre = 'Usuario'
  user = ''

  constructor(private activatedRoute:ActivatedRoute, 
    private consultasService:ConsultasService, 
    private respuestasService:RespuestasService,
    private usuariosService:UsuariosService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const con = this.consultasService.getConsulta(this.id)
    this.consulta = con
    const id = con.id_usuario
    this.nombre = this.usuariosService.getUsuarioId(id).nombre
    this.respuestas = this.respuestasService.getRespuestas(this.id)
    this.tamano = this.respuestas.length
  }

  nombreId(id){
    return this.usuariosService.getUsuarioId(id).nombre
  }

  comentariosId(id){
    return this.respuestasService.getComentarios(id)
  }

  cerrarConsulta(){
    this.consultasService.updateConsultaMis(this.id)
    this.consulta = this.consultasService.getConsulta(this.id)
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
          handler: (data) => {
            this.respuestasService.addRespuesta(data.titulo,data.respuesta,this.id, this.user)
            this.respuestas = this.respuestasService.getRespuestas(this.id)
            this.tamano = this.respuestas.length
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPromptComent(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Escriba su comentario',
      inputs: [
        {
          name: 'comentario',
          type: 'textarea',
          placeholder: 'Comentario',
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
          handler: (data) => {
            this.respuestasService.addComentario(data.comentario,id,this.user)
            this.comentariosId(id)
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

}
