import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 5 }))]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SkillsComponent {

  showComponent: boolean = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  skills = [
    {
      "name": "Java",
      "src": "assets/images/java-horizontal.svg"
    },
    {
      "name": "Android",
      "src": "assets/images/android-ar21.svg"
    },
    {
      "name": "Angular",
      "src": "assets/images/angular-ar21.svg"
    },
    {
      "name": "Flutter",
      "src": "assets/images/flutterio-ar21.svg"
    },
    {
      "name": "GitHub",
      "src": "assets/images/github-ar21.svg"
    },
    {
      "name": "Hibernate",
      "src": "assets/images/hibernate.svg"
    },
    {
      "name": "JavaScript",
      "src": "assets/images/javascript-horizontal.svg"
    },
    {
      "name": "Linux",
      "src": "assets/images/linux.svg"
    },
    {
      "name": "MongoDB",
      "src": "assets/images/mongodb-ar21.svg"
    },
    {
      "name": "MySQL",
      "src": "assets/images/mysql-horizontal.svg"
    },
    {
      "name": "Node.js",
      "src": "assets/images/node.svg"
    },
    {
      "name": "Open Source",
      "src": "assets/images/opensource.svg"
    },
    {
      "name": "Spring Framework",
      "src": "assets/images/springio.svg"
    },
    {
      "name": "SQLite",
      "src": "assets/images/sqlite-ar21.svg"
    },
    {
      "name": "CSS",
      "src": "assets/images/w3_css-ar21.svg"
    },
    {
      "name": "HTML5",
      "src": "assets/images/w3_html5-ar21.svg"
    },
    {
      "name": "Azure",
      "src": "assets/images/microsoft_azure-ar21.svg"
    },
    {
      "name": "Microservice",
      "src": "assets/images/microservice-icon.svg"
    },
    {
      "name": "Typescript",
      "src": "assets/images/typescriptlang-ar21.svg"
    },
    {
      "name": "Postgresql",
      "src": "assets/images/postgresql-ar21.svg"
    },
    {
      "name": "TSQL",
      "src": "assets/sql-server.svg"
    },
    {
      "name": "Python",
      "src": "assets/python-ar21.svg"
    },
    {
      "name": "Flask",
      "src": "assets/pocoo_flask-ar21.svg"
    }
    ,
    {
      "name": "Kotlin",
      "src": "assets/kotlinlang-ar21.svg"
    },
    {
      "name": "Express",
      "src": "assets/expressjs-ar21.svg"
    },
    {
      "name": "jQuery",
      "src": "assets/images/jquery-ar21.svg"
    }
  ]



}

