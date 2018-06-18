import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  public email: string;
  public password: string;

  login(): void {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }


  loginHttp(): void {
    const user = {
      email: this.email,
      password: this.password
    };

    this.httpClient.post('http://localhost:8080/api-aelt/user/login', user).subscribe(data => {
      console.log(data);
      if (data) {
        this.router.navigate(['user']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

  ngOnInit(): void {
    this.httpClient.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }

}
