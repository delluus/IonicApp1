import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  logMeIn() {
    console.log("logMeIn function used")
    // code for loggin in user goes here
    this.router.navigate(['/home'])
  }

}
