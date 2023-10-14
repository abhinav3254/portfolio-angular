import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToSkills() {
    this.router.navigate(['/skills']);
  }

  navigateToWork() {
    this.router.navigate(['/work']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }


}
