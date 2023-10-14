import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 5 }))]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ProjectsComponent {

  showComponent: boolean = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

}
