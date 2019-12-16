import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

 
@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  username = null;
  password = null;

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.username = environment.user;
    this.password = environment.pass;
    console.log('inside', environment.user, this.username);
  }

  jobs() {
    this.router.navigate(['jobs']);
  }

  apiml() {
    this.router.navigate(['apiml']);
  }

  view() {
    this.router.navigate(['view']);
  }

  files() {
    this.router.navigate(['files']);
  }

  logout() {
    this.authService.logout();
  }

}