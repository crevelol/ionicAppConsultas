import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inicio = "Esperando"

  constructor(private usuariosService:UsuariosService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  iniciarSesion(correo, contrasena){
    const res = this.usuariosService.getUsuario(correo, contrasena)
    if(res.nombre !== undefined){
      this.navCtrl.navigateForward('/home')
    }else{
      this.inicio = "Fallido"
    }
  }

}
