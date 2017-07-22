import {UserService} from './user.service';
import {Component, OnInit} from '@angular/core';
import {MdCard, MdButton} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: Array<any> = [];

  constructor(private employeeService: UserService, private router: Router) {}

  ngOnInit() {
    this.employeeService.getAllUsers().subscribe(ele => {
      this.users = ele.json()._embedded.employees
      for (const user of this.users) {
        this.employeeService.getDepartmentById(user.eid).subscribe(item => {
          user.departmentName = item.deptName
        })
      }
    });
  }

}
