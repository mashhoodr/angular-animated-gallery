import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: '0',
            transform: 'translateY(-40px)'
          }),
          stagger(30, [
            animate('300ms ease-in', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ]),
      transition('* => *', animate('300ms ease-out', style({
        opacity: 0,
        transform: 'translateY(40px)'
      })))
    ])
  ]
})
export class GalleryComponent {
  @ViewChild('modal') modal: ElementRef;
  query = '';
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

  constructor(private modalService: NgbModal) { }

  ngAfterViewInit() {
    console.log(this.modal);
  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      windowClass: 'dark',
      centered: true,
      container: '.cmodal'
    }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }

}
