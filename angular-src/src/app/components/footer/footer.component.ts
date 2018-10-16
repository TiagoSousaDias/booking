import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }
  isHome:any;
  name:String;
  email:String;
  message:String;
  ngOnInit() {
   this.isHome = (this.router.url !='/'? false:true);
  //  this.isHome = this.router.url;
  }
 onContactSubmit(){

 }
}
