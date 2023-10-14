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

  socials = [
    {
      name: 'instagram',
      src: 'assets/social/instagram-icon.svg',
      link: 'https://www.instagram.com/__abhinav__jha__'
    },
    {
      name: 'github',
      src: 'assets/social/github-icon.svg',
      link: 'https://github.com/abhinav3254'
    },
    {
      name: 'linkedin',
      src: 'assets/social/linkedin-icon.svg',
      link: 'https://www.linkedin.com/in/abhinav3254'
    },
    {
      name: 'stackoverflow',
      src: 'assets/social/stackoverflow-icon.svg',
      link: 'https://stackoverflow.com/users/22455030/abhinav-jha'
    },
    {
      name: 'twitter',
      src: 'assets/social/twitter-icon.svg',
      link: 'https://twitter.com/abhinavjha3254'
    }
  ]

}