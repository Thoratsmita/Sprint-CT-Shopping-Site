import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

  constructor( private fb : FormBuilder) { }

  initForm(){
  this.loginForm = this.fb.group({
    Email : ['',[Validators.required,Validators.email]],
    Password : ['', Validators.required]
  })
  }

  ngOnInit(): void {
   this.initForm();

  }

  signIn(){
   
  }
}
