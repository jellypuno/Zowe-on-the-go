import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zosmf',
  templateUrl: './zosmf.page.html',
  styleUrls: ['./zosmf.page.scss'],
})
export class ZosmfPage implements OnInit {

  data = null;
  responseArray: Array<any> = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getSpecialData().subscribe(result => {
      console.log('details: ', result);
      this.data = result;
      this.responseArray = this.data.plugins
      console.log('array: ', this.responseArray);
    });
  }

  back() {
    this.router.navigate(['inside']);
  }

  logout() {
    this.authService.logout();
  }

}
