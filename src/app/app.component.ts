import { Component } from '@angular/core';
import { trigger, transition, group, query, animate, style } from '../../node_modules/@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('gallery => item', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', [
          style({ transform: 'translateY(100vw)', zIndex: 999 }),
          animate('500ms ease-in-out', style({
            transform: 'translateY(0)'
          }))
        ])
      ]),

      transition('item => gallery', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':leave', [
          style({ transform: 'translateY(0vw)' }),
          animate('500ms ease-in-out', style({
            transform: 'translateY(100vw)'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {

  triggerAnimation(outlet) {
    console.log(outlet.activatedRouteData);
    return outlet.activatedRouteData.animation || null;
  }

}
