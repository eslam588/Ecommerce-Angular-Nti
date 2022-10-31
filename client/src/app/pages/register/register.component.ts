import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg:string=""
  userRegister:any = {
    username:"",
    email:"",
    password:""
  }
  constructor(private _data:DataService,private _router:Router) { }

  ngOnInit(): void {
  }

  registeruser(data: any){
     if(data.valid){
      this._data.register(this.userRegister).subscribe(
        data => {
          console.log(data)
        }
        ,e=> {
          this.msg=e.error.message
        },
        ()=> {
          data.resetForm();
          this._router.navigateByUrl("/login")
        }
       )
      }
      else{
          this.msg = "check your inputs"      
     }
    }

}
