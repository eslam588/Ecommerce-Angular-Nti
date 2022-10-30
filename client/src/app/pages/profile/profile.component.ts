import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.me()
  }

  me(){
    this._data.me().subscribe(
      (res)=>{console.log(res)},
      (err) => console.log(err.error.message),
      ()=>console.log("done")
    )
  }


}
