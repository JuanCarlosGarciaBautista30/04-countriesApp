import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePagesComponent,
    AboutPagesComponent
  ]
})
export class SharedModule { }
