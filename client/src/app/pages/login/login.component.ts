import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = ""
  isSubmitted=false
  loginForm = new FormGroup({
    email:new FormControl("" , [Validators.required]),
    password:new FormControl("" , [ Validators.required])
  })

  constructor(private _data:DataService,private _router:Router) { }

  ngOnInit(): void {
  }

  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}

  
  
  handleLogin() { 
    this.isSubmitted=true
    if(this.loginForm.valid){
      this._data.login(this.loginForm.value).subscribe(res => {
        console.log(res)
        localStorage.setItem("tokenn", res.token)
        this._data.isLoggedIn=true
        this._data.userData = res.data
        },e => {
          console.log(e);
          this._data.isLoggedIn=false
          this._data.userData = null
          this.errorMsg=e.error.message
        },()=>{
            this._router.navigateByUrl("")
        }
       )

    }
   
    
    
    }
 
 
  }
   



