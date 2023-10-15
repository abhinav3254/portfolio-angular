import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { SpinnerserviceService } from '../spinner/spinnerservice.service';


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

  constructor(public loadingService: SpinnerserviceService) { }

  showComponent: boolean = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  sendForm() {
    alert('server is not responding!\ntry after some time!!')
  }


}
