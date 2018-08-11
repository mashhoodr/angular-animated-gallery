import { Component } from '@angular/core';
import { NgbModal } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query = '';
  title = 'animation-demo';
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
  closeResult;

  constructor(private modalService: NgbModal) {

  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      windowClass: 'dark',
      centered: true
    }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }
}
