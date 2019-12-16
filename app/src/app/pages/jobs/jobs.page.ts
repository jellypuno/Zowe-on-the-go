import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class JobsPage implements OnInit {
  searchForm: FormGroup;
  data: any;
  loading: any;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      prefix: ['', [Validators.maxLength(8)]],
      owner: [environment.user],
      jobid: ['', [Validators.maxLength(8)]]
    });
  }
  search() {
    this.authService.getJobsData(this.searchForm.value).subscribe(result => {
    this.data = { ...result };
    const dataString = JSON.stringify(this.data);
    this.router.navigate(['result', dataString]);
    });
  }
  back() {
    this.router.navigate(['inside']);
  }

}
