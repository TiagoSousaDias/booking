import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  slicer:any;

  constructor(private http:Http, private jwtHelper:JwtHelperService) { }

    getSlicer(slicer){
      let header = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/slicer/'+this.slicer,{headers:headers})
        .pipe(map(res=>res.json()));
    }
}
