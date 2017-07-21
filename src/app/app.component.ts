import {UserService} from './user.service';
import {Component, OnInit} from '@angular/core';
import {MdCard, MdButton} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: Array<any> = [];

  constructor(private employeeService: UserService) {}

  ngOnInit() {
    this.employeeService.getAllUsers().subscribe(ele => {
      this.users = ele.json()._embedded.employees
      for (const user of this.users) {
        this.employeeService.getDepartment(user._links.department.href).subscribe(item => {
          user.departmentName = item.json().deptName
        })
      }
    });
  }

}
