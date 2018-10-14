import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  image;
  constructor(private route: ActivatedRoute) {
    this.image = this.route.snapshot.params.url;
    console.log('loading', this.image);
  }

  ngOnInit() {
  }

}
