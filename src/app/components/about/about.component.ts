import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';


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

  constructor(private route: Router) { }

  socialLink(src: any) {
    window.open(src, '_blank');
  }


  showComponent: boolean = true;

  hobbies = [
    {
      name: 'coding',
      src: 'assets/coding-html-svgrepo-com.svg'
    },
    {
      name: 'music',
      src: 'assets/music-note-3-svgrepo-com.svg'
    },
    {
      name: 'gaming',
      src: 'assets/gaming-svgrepo-com.svg'
    },
    {
      name: 'cooking',
      src: 'assets/cooking.svg'
    }
  ]



}