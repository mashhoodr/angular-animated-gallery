import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';

const routes: Routes = [{
  component: GalleryComponent,
  path: '',
  data: { animation: 'gallery' }
}, {
  component: GalleryItemComponent,
  path: 'item/:url',
  data: { animation: 'item' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
