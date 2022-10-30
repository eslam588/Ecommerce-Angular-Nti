import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService } from '../../services/data.service';

@Component({
  selector: 'app-singleproductpage',
  templateUrl: './singleproductpage.component.html',
  styleUrls: ['./singleproductpage.component.css']
})
export class SingleproductpageComponent implements OnInit {
  id: string= ""
  singleprod:any ={}
  constructor(public _data:DataService,private _activatedRoute : ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params["id"]
    console.log(this.id);
    this.getproduct(this.id)
  }

  getproduct(id:string){
    this._data. getsingleproduct(id).subscribe((data)=> {
      console.log(data)
      this.singleprod=data.data
    },(err)=>{
      console.log(err.error.message)
    },()=>console.log("fetch product")
    
    )
    

  }

  
  

   

}
