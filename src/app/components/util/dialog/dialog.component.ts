import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  project: ProjectData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // Access the data here
    this.project = data as ProjectData;
  }

}

export interface ProjectData {
  img: string
  title: string
  desc: string
  tools: string[]
}
