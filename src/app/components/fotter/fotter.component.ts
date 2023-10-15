import { Component } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent {


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