import { Component, OnInit } from '@angular/core';
import {AlojamentoService} from '../../services/alojamento.service';
import {FilterPipe} from '../../services/filter.pipe';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private alojamentoService:AlojamentoService) { }
  alojamentos:any;
  ngOnInit() {
    this.alojamentoService.GetAllRooms().subscribe(alojamentos=>{
      this.alojamentos = alojamentos;
    },err =>{
    throw err;
      return false;
    });
  }

}
