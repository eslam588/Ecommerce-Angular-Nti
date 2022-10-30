import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _data:DataService,private _router:Router) { }

  ngOnInit(): void {
    this.me()
  }

  me(){
    this._data.me().subscribe(
      (res)=>{
        console.log(res)
        this._data.isLoggedIn=true
        this._data.userData=res.data
      },
      (err) => {
          console.log(err.error.message)
          this._data.isLoggedIn=false
          this._data.userData=null
        },
      ()=>console.log("done")
    )
  }

  logout() {
    this._data.logout().subscribe((res) =>{
      console.log(res);
      this._data.isLoggedIn=false
      this._data.userData=null
      setTimeout(() => {
        this._router.navigateByUrl("")
      },500)
      
      },
      (err) => {
        console.log(err.error.message)
      }
    )
  }

}
