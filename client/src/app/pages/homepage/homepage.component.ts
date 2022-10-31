import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from './../../interfaces/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products:any[]=[]
  noproducts : boolean = false
  constructor(public _data:DataService) { }
  

  ngOnInit(): void {
    this.allproducts()
    this.me()
  }

  allproducts() {
    this._data.getallproducts().subscribe((data)=> {
      console.log(data)
      this._data.allproducts=data.data
      this.products=data.data
      this.noproducts=true   
    },(err)=>{
      console.log(err.error.message)
    },()=>console.log("show all products")
    
    )
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

}
