import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
   registerForm: FormGroup | undefined | any; // create an instance of FormGroup
  submitted = false;
customValidator?:any
  constructor(
    private fb: FormBuilder, // inject FormBuilder
   // inject CustomvalidationService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({ // initialize the FormGroup using FormBuilder
      userName: ['', [Validators.required, Validators.minLength(5)], this.customValidator.userNameValidator.bind(this.customValidator)], // add a FormControl for userName with required, minLength and custom validators
      email: ['', [Validators.required, Validators.email]], // add a FormControl for email with required and email validators
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])], // add a FormControl for password with required and custom pattern validator
      confirmPassword: ['', [Validators.required]], // add a FormControl for confirmPassword with required validator
      acceptTandC: [false, Validators.requiredTrue] // add a FormControl for acceptTandC with requiredTrue validator
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword') // add a custom validator for matching passwords
    });
  }

  get registerFormControl() {
    return this.registerForm;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm) {
      alert('Form Submitted succesfully!!!\\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm;
  }
}

