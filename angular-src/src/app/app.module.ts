import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { BookComponent } from './components/book/book.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'book',component: BookComponent},
    {path:'testimonial',component: TestimonialComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    BookComponent,
    TestimonialComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
