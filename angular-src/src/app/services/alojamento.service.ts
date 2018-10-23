import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';;

@Injectable({
  providedIn: 'root'
})
export class AlojamentoService {
  alojamentos:any;

  constructor(private http:Http) {}

  GetAllRooms(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/alojamento/',{headers:headers})
      .pipe(map(res=>res.json()));
  }
  GetRoomById(){

  }
}
