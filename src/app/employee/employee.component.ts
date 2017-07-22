import {UserService} from '../user.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  userId: number = null;
  user: any;
  projects: any = new Array();
  gender = ['Male', 'Female'];

  constructor(private userService: UserService, private ar: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.ar);
    this.ar.params.subscribe(params => {
      this.userId = +params['eid'];
      this.userService.getUserById(this.userId).subscribe(user => this.user = user);
      this.userService.getProjectsById(this.userId).subscribe(projects => this.projects = projects._embedded.projects);
      console.log(this.projects);
    });


  }

}
