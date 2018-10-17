import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
  animateChild
} from '@angular/animations';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @ViewChild('modal') modal: ElementRef;
  query = '';
  imageResultCount = -1;
  images = [
    {
      uri: '1.jpg',
      heading: 'Amazing Waterfall',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '2.jpg',
      heading: 'Scenic Mountain',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '3.jpg',
      heading: 'Forest Waterfall',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '4.jpg',
      heading: 'Grassy Fields',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '5.jpg',
      heading: 'Forest Lake',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '6.jpg',
      heading: 'Canyons Maze',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '7.jpg',
      heading: 'Beautiful Garden',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '8.jpg',
      heading: 'Rocky Beach',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    },
    {
      uri: '9.jpg',
      heading: 'Sunset at Beach',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
    }
  ];

  imageResults = this.images;

  transform(term: string) {
    term = term ? term.trim() : '';
    if (!term) {
      this.imageResults = this.images;
      this.imageResultCount = -1;
    } else {
      this.imageResults = (this.images || []).filter((item) => item.hasOwnProperty('heading') && new RegExp(term, 'gi').test(item['heading']));
      const newTotal = this.imageResults.length;
      if (this.imageResultCount !== newTotal) {
        this.imageResultCount = newTotal;
      } else {
        this.imageResultCount = -1;
      }
    }
    console.log(this.imageResultCount);
  }

}
