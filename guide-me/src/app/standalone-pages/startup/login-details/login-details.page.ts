import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FireauthserviceService } from 'src/app/services/fireauthservice/fireauthservice.service';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';


@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.page.html',
  styleUrls: ['./login-details.page.scss'],
})
export class LoginDetailsPage implements OnInit {

  @ViewChild('myForm', {read: ElementRef}) myForm : ElementRef;
  validations_form: FormGroup;

  errorMessage: string = '';

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },

      { type: 'pattern', message: 'Please enter a valid email.' },
    ],

    password: [
      { type: 'required', message: 'Password is required.' },

      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.',
      },
    ],
  };

  constructor(
    private authService: FireauthserviceService,
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  submit() {
    console.log('submit');
    console.log(this.myForm);
    console.log(this.validations_form.value);
    this.tryLogin(this.validations_form.value);
    // this.myForm.nativeElement.submit(this.validations_form.value);
  }

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
    });
  }

  tryLogin(value) {
    console.log('tryLogin');
    console.log(value);
    this.authService
      .doLogin(value)

      .then(
        (res) => {
          this.router.navigate(['/tabs/tab1']);
        },
        (err) => {
          this.errorMessage = err.message;

          console.log(err);
        }
      );
  }

  goToRegisterPage() {
    this.router.navigate(['/register-details']);
  }

  goToFeed() {
    console.log('goToFeed');
    this.router.navigate(['/tabs/tab1']);
  }
}
