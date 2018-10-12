import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }
  isHome:any;
  ngOnInit() {
   this.isHome = (this.router.url !='/'? false:true);
  //  this.isHome = this.router.url;
  }

}
