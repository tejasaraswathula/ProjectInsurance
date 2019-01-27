import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <div class="container">
  <div class="row">
    <div class="col-sm-6">
      <img style="height:500px; width:580px;" src="/assets/login1.jpg" alt="This preview is not available"/><br><br>
    </div>
    <div class="col-sm-6">
        <div class="logmain center-block well">
            <div class="well-lg">
                <div class="form-class">
                  <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
                      <h2 class="login-text"><i class="fas fa-user-circle" aria-hidden="true"> <b>Login</b></i></h2><br>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input type="text" id="name" name="name" class="form-control" placeholder="Enter UserName"
 required minlength="6" [(ngModel)]="model.name" #name="ngModel" autocomplete="off">
                            </div>
                            <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">
                                <div *ngIf="name.errors.required">
                                    User Name is required.
                                </div>
                                <div *ngIf="name.errors.minlength">
                                    User Name must be at least 6 characters long.
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
<input type="password" id="password" name="password" class="form-control" required minlength="8"
placeholder="Enter Password" [(ngModel)]="model.password" #password="ngModel" >
                            </div>
                            <div *ngIf="password.invalid && (password.dirty || password.touched)" class="alert alert-danger">
                                <div *ngIf="password.errors.required">
                                    Password is required.
                                </div>
                                <div *ngIf="password.errors.minlength">
                                    Password must be at least 8 characters long.
                                </div>
                            </div>
                        </div>
<a routerLink="/login"><button type="submit" class="btn btn-primary" name="log_user" [disabled]="f.invalid">Login</button></a>
                        &nbsp;Not a Member?
                        <a routerLink="/register" routerLink="active" >Register</a>
                  </form>
                </div>
              </div>
            </div>
    </div>
  </div>
  </div>

  `,
  styles: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(8)]],
      password: [null, []],
      email: [null, [Validators.email]],
      street: [null, [Validators.pattern('/[^a-zA-Z0-9]/')]],
      city: [null, []],
      po: [null, [Validators.pattern('^[1-9][0-9]{4}$')]]
    });
  }

  ngOnInit() {
    console.log(this.loginForm.getRawValue());
  }

  onSubmit(recvalue: any) {
  }
}
