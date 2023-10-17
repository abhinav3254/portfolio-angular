import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { SpinnerserviceService } from '../spinner/spinnerservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 5 }))]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  constructor(public loadingService: SpinnerserviceService) { }

  showComponent: boolean = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }


  ngOnInit(): void {
    // Show the spinner
    this.loadingService.startLoading();

    // Simulate a 1-second delay
    setTimeout(() => {
      // Hide the spinner after 1 seconds
      this.loadingService.stopLoading();
    }, 1000);
  }

  gitHubRedirect() {
    const link = 'https://www.github.com/abhinav3254';
    window.open(link, '_blank');
  }

  linkedInRedirect() {
    const link = 'https://www.linkedin.com/in/abhinav3254';
    window.open(link, '_blank');
  }

}
