import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 5 }))]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ContactComponent {

  showComponent: boolean = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }


}
