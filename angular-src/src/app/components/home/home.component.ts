import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  bookText='Experimente os nossos quartos e apartamentos';
  gymText='Venha usufruir e manter se em forma no nosso ginásio!';
  ngOnInit() {
  }

}
