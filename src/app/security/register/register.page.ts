import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../service/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  router:  Router,
              private authService: AuthentificationService
    ) { }

  ngOnInit() {
  }
  register(form) {
    console.log('all',form.controls.value);
    console.log('***************************-----------***************************');
    console.log('prenom : =>',form.controls.valueOf().prenom.value);
    console.log('nom : =>',form.controls.valueOf().nom.value);
    console.log('email : =>',form.controls.valueOf().login.value);
    console.log('password : =>',form.controls.valueOf().password.value);
    console.log('confirm : =>',form.controls.valueOf().confirm.value);
    /*
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });  */
  }
}
