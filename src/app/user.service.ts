import {Injectable} from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getAllUsers() {
    const apiUrl = 'http://localhost:8080/employees?sort=firstName'
    return this.http.get(apiUrl);
  }

  getUserById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid).map(user => user.json());
  }

  getDepartment(url: string) {
    return this.http.get(url);
  }

  getProjectsById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid + '/projects').map(user => user.json());
  }

}
