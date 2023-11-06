import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Correct import statement
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  loginForms = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@gmail\.com$')]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });
  
  submitted = false;
  
  loggedin() {
    this.submitted = true;
    if (this.loginForms.valid) {
      this.router.navigate(['/excel-upload']);
    }
  }
  
  get email(): FormControl {
    return this.loginForms.get("email") as FormControl;
  }
  
  get password(): FormControl {
    return this.loginForms.get("password") as FormControl;
  }
}
