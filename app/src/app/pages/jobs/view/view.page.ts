import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  data = null;
  jobname = null;
  jobid = null;
  jbnm = null;

  constructor(private authService: AuthService, private router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.jobname = this.activeRoute.snapshot.paramMap.get('name');
    this.jobid = this.activeRoute.snapshot.paramMap.get('id');
    this.authService.viewJobsData(this.jobname, this.jobid).subscribe(result => {
    console.log('I am in View Spool', result, typeof(result));
    this.data = JSON.parse(result);
    this.jbnm = this.jobname;
    });
  }

  detail(jobname, jobid, ddname, stepname, id) {
    this.router.navigate(['detail', jobname, jobid, ddname, stepname, id]);
  }

  back() {
    this.router.navigate(['jobs']);
  }

}
