import {Injectable} from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getAllUsers() {
    const apiUrl = 'http://localhost:8080/employees'
    return this.http.get(apiUrl);
  }

  getDepartment(url: string) {
    return this.http.get(url);
  }

}
