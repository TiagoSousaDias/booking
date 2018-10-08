import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images:any;
  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.imageService.getSlicer(1).subscribe(images=>{
      this.images = images.images;
    },err =>{
    throw err;
      return false;
    });
  }

}
