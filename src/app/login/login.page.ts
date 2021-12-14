import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inicio = "Esperando"
  users = []

  constructor(private usuariosService:UsuariosService,
    public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
    this.users = this.usuariosService.getUsuarios()
  }

  iniciarSesion(correo, contrasena){
    const res = this.usuariosService.getUsuario(correo, contrasena)
    if(res.nombre !== undefined){
      this.navCtrl.navigateForward('/home/'+res.id_usuario)
    }else{
      this.inicio = "Fallido"
    }
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cree su consulta',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre',
        },
        {
          name: 'correo',
          type: 'textarea',
          placeholder: 'Correo',
        },
        {
          name: 'contrasena',
          type: 'textarea',
          placeholder: 'Contraseña',
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
            this.usuariosService.addUsuario(data.nombre,data.correo,data.contrasena)
            this.users= this.usuariosService.getUsuarios()
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

  crearCuenta(nombre, correo, contrasena){
    const res = this.usuariosService.getUsuario(correo, contrasena)
    if(res.nombre !== undefined){
      this.navCtrl.navigateForward('/home/'+res.id_usuario)
    }else{
      this.inicio = "Fallido"
    }
  }

}
