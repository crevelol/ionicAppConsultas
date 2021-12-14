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
      header: 'Cree su consulta',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Titulo',
        },
        {
          name: 'consulta',
          type: 'textarea',
          placeholder: 'Consulta',
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
          handler: (data) => {
            this.consultasService.addConsulta(data.titulo,data.consulta)
            this.navCtrl.navigateForward('/revision/'+this.consultasService.getConsultas().length)
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
