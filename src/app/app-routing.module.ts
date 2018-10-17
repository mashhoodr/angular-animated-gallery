import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{
  component: GalleryComponent,
  path: ''
}, {
  component: GalleryItemComponent,
  path: 'item/:url'
}, {
  component: AboutPageComponent,
  path: 'about'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
