import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerserviceService {

  constructor() { }

  isLoading = false;

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }
}
