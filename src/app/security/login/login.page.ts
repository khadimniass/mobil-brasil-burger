import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm = new FormGroup({
    login:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });
  constructor(private authenticationService: AuthentificationService) { }
  ngOnInit() {
  }
  login() {
    this.authenticationService.login(this.myForm.value);
  }
}
