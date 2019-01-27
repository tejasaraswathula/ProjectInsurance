import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  template: `
<div class="container">
<div class="row">
  <div class="col-sm-6">
  <img style="height:350px; width:580px;" src="/assets/lexcorp.png" alt="This preview is not available"/><br><br>
  <b>Register and get the full level access to our website</b>
  </div>
  <div class="col-sm-6">
      <div class="logmain center-block well">
          <div class="well-lg">
              <div class="form-class">
                <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
                    <h2 class="login-text"><i class="fas fa-user-circle" aria-hidden="true"> <b>Register</b></i></h2><br>
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
 <input type="password" id="password" name="password" class="form-control" required minlength="8" placeholder="Enter Password"
                               [(ngModel)]="model.password" #password="ngModel" >
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
                      <div class="form-group">
                          <div class="input-group">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
<input type="password" id="confirmPassword" name="confirmPassword" class="form-control" required minlength="8"
placeholder="Re-enter Password" [(ngModel)]="model.confirmPassword" #confirmPassword="ngModel" >
                          </div>
<div *ngIf="confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)" class="alert alert-danger">
                              <div *ngIf="confirmPassword.errors.required">
                                  confirmPassword is required.
                              </div>
                              <div *ngIf="confirmPassword.errors.minlength">
                                  confirmPassword must be at least 8 characters long.
                              </div>
                          </div>
                      </div>

                      <div class="form-group">
                            <div class="input-group">
                              <!-- <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>  -->
                              <span class="input-group-addon"><i class="fa fa-envelope fa glyphicon glyphicon-envelope"></i></span>
 <input type="email" id="email" name="email" class="form-control" minlength="8" placeholder="Enter U'r E-Mail"
 [(ngModel)]="model.email" #email="ngModel" autocomplete="off" required>
                            </div>
                            <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">
                                <div *ngIf="email.errors.required">
                                    email is required.
                                </div>
                                <div *ngIf="email.errors.minlength">
                                    email must be start with any of the characters and must include "@"
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                                <div class="input-group">
                                  <!-- <span class="input-group-addon"><i class="fa fa-phone" aria-hidden="true"></i></span> -->
                                  <span class="input-group-addon"><i class="fa fa-phone glyphicon glyphicon-phone"></i></span>
<input type="tel" id="phone" name="phone" class="form-control" minlength="10" maxlength="10" placeholder="Ph.no without country code"
[(ngModel)]="model.phone" #phone="ngModel" pattern="[0-9]{10}" autocomplete="off" required>
                                </div>
                                <div *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">
                                    <div *ngIf="phone.errors.required">
                                        Phone is required.
                                    </div>
                                    <div *ngIf="phone.errors.minlength">
                                        Phone must be 10 characters long.
                                    </div>
                                    <div *ngIf="phone.errors.pattern" class="alert alert-danger">Phone number must contain numbers</div>
                                </div>
                            </div>

                      <!-- <div class="form-group">
                              <div class="input-group">
                                  <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
<input type="email" id="email" name="email" class="form-control" minlength="8" placeholder="Enter U'r E-Mail"
[(ngModel)]="model.email" #email="ngModel" autocomplete="off" required>
                              </div>
                              <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">
                                  <div *ngIf="email.errors.required">
                                      email is required.
                                  </div>
                                  <div *ngIf="email.errors.minlength">
                                      email must be start with any of the characters and must include "@"
                                  </div>
                              </div>
                          </div>
                          <div class="form-group">
                                  <div class="input-group">
                                      <span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></span>
 <input type="tel" id="phone" name="phone" class="form-control" minlength="10" maxlength="10" placeholder="Ph.no without country code"
                                      [(ngModel)]="model.phone" #phone="ngModel" ng-pattern="/^[7-9][0-9]{9}$/" autocomplete="off" required>
                                  </div>
                                  <div *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">
                                      <div *ngIf="phone.errors.required">
                                          Phone is required.
                                      </div>
                                      <div *ngIf="phone.errors.minlength">
                                          Phone must be 10 characters long.
                                      </div>
                                  </div>
                              </div> -->

  <a routerLink="/login"><button type="submit" class="btn btn-primary" name="log_user" [disabled]="f.invalid">REGISTER</button></a>
                      &nbsp;Already a Member? <a routerLink="/login">Login</a>
                </form>
              </div>
            </div>
          </div>
  </div>
</div>
</div>

  `,
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
