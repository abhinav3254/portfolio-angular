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


  notesLink(src: any) {
    window.open(src, '_blank');
  }

  dropdownListsLinks = [
    {
      "name": "Azure-Java",
      "link": "https://learn.microsoft.com/pdf?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fazure%2Fdeveloper%2Fjava%2Fspring-framework%2Ftoc.json"
    }
  ]

}
