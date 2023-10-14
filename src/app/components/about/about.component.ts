import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 1 }))]), // Increase the duration here
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]), // Increase the duration here
    ]),
  ],
})
export class AboutComponent {

  showComponent: boolean = true;

}