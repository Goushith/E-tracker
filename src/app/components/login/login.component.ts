import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faLock} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth:AuthService , private route:Router , private builder:FormBuilder) { }

  ngOnInit(): void {
    if(this.auth.isloggedIn()){
      this.route.navigate(['admin'])
    }
  }



LoginForm = this.builder.group({
  email: this.builder.control('',  Validators.compose([Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
  password: this.builder.control('', Validators.required)
});


onSubmit(){
if(this.LoginForm.valid){
  this.auth.login(this.LoginForm.value)
  .subscribe(
    (result)=>{
      this.route.navigate(['admin'])
    },
    (err:Error)=>{
      alert(err.message)
    }
  )
}

}





}
