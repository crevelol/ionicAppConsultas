import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consulta/consultas.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private consultasService: ConsultasService,
    public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
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
          text: 'Crear',
          handler: () => {
            this.consultasService.addConsulta('Ingreso prueba 1','Ingreso consulta prueba 1')
            this.navCtrl.navigateForward('/revision/'+this.consultasService.getConsultas().length)
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
