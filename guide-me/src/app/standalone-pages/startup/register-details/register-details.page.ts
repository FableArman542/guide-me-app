import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { FireauthserviceService } from 'src/app/services/fireauthservice/fireauthservice.service';
import { UsersService } from 'src/app/services/usersservice/users.service';
import { UserProfile } from 'src/app/models/user-profile';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.page.html',
  styleUrls: ['./register-details.page.scss'],
})
export class RegisterDetailsPage implements OnInit {

  @ViewChild('myForm', {read: ElementRef}) myForm : ElementRef;
  validations_form: FormGroup;

  errorMessage: string = '';

  successMessage: string = '';

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },

      { type: 'pattern', message: 'Enter a valid email.' },
    ],

    password: [
      { type: 'required', message: 'Password is required.' },

      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.',
      },
    ],
    username: [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    ]
  };

  constructor(
    private authService: FireauthserviceService,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,

          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
      username: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
    });
  }

  submit() {
    console.log('submit');
    console.log(this.myForm);
    console.log(this.validations_form.value);
    this.tryRegister(this.validations_form.value);
    // this.myForm.nativeElement.submit(this.validations_form.value);
  }

  tryRegister(value) {
    this.authService
      .doRegister(value)

      .then(
        (res) => {
          console.log(res);
          console.log(value)

          this.errorMessage = '';

          this.usersService.addUser(new UserProfile(
            res.user._delegate.uid,
            value.email,
            value.username,
            '',
            '',
            true));

          this.successMessage = 'Your account has been created. Please log in.';
        },
        (err) => {
          console.log(err);

          this.errorMessage = err.message;

          this.successMessage = '';
        }
      );
  }

  goToLogin() {
    this.router.navigate(['/login-details']);    
  }

  goBack() {
    this._location.back();
  }

}
