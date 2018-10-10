import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('f') signupForm:NgForm;
  answer = '';
  defaultSelect ='selected';
  genders =['Male', 'Female'];
  

  onSubmit(){
    console.log(this.signupForm);
  }
  
}

