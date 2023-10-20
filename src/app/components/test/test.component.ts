import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../util/dialog/dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data // Pass your data here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  projects = [
    {
      "img": "https://placehold.co/600x400",
      "title": "Social Media Story Saver",
      "desc": "The Social Media Story Saver is an innovative Android application designed to enhance your social media experience.With the explosive popularity of ephemeral content on platforms like Instagram, Facebook, and Snapchat, staying updated with your friends' stories has become a daily ritual. This application simplifies and centralizes this process, allowing users to effortlessly save, view, and manage stories from various social media platforms, all within a single, user-friendly interface.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/android-ar21.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "Kontest Mobile Application",
      "desc": "Kontest is an innovative Android application designed to empower coding enthusiasts and programmers by providing them with a centralized platform for tracking and staying up-to-date with all ongoing coding competitions. This app is a one-stop solution for individuals who are passionate about competitive coding and are eager to participate in coding contests from various online platforms. With Kontest, users can easily access comprehensive information about a wide range of coding competitions happening across different online judges, such as Codeforces, LeetCode, AtCoder, HackerRank, and more. The app offers a user-friendly and intuitive interface, making it simple to navigate and find relevant contests. Key features of Kontest include real-time contest updates, detailed contest descriptions, timing information, and direct links to contest pages. Users can receive timely notifications and stay organized by setting reminders for contests they wish to participate in. Kontest is an indispensable tool for coders looking to enhance their skills, compete with others, and stay informed about the latest coding challenges. It simplifies the process of managing multiple coding competitions, enabling users to focus on what they do best—solving complex problems and honing their coding skills. Whether you're a competitive coder or a programming enthusiast, Kontest is your go-to app for a seamless coding competition experience.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/android-ar21.svg",
        "assets/images/sqlite-ar21.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "Blog Website",
      "desc": "This expansive full-stack project showcases a Java backend, meticulously architected using the robustness of Spring and Spring Boot. Employing JWT for stringent authentication and authorization, it upholds the highest standards of security. On the frontend, Angular takes the helm, delivering an exceptionally intuitive user interface. The harmonious synergy among these cutting-edge technologies yields a flawlessly integrated user experience. From proficient database management to seamless API integration, every facet is meticulously honed to perfection.With an unyielding dedication to innovation, this project epitomizes the pinnacle of contemporary full- stack development.It seamlessly amalgamates the inherent strength of Java with the dynamism of Spring, Spring Boot, JWT, and Angular to deliver an extraordinary end - to - end solution.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/angular-ar21.svg",
        "assets/images/jwtio-json-web-token.svg",
        "assets/images/springio.svg",
        "assets/images/mysql-horizontal.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "GITA API",
      "desc": "The Geeta API, meticulously crafted with Node.js, serves as a testament to the seamless integration of technology and spirituality. This API provides instant access to the profound teachings of the Bhagavad Gita, programmatically delivering its verses and profound insights. Powered by Node.js, the API guarantees swift and reliable responses, making it effortlessly adaptable for a wide range of applications.With a keen focus on scalability and performance, the Geeta API empowers developers to seamlessly infuse spiritual wisdom into their projects. Through this harmonious fusion of cutting-edge technology and timeless philosophy, users can access the timeless teachings of the Bhagavad Gita, forging a profound connection between code and consciousness.",
      "tools": [
        "assets/images/node.svg",
        "assets/images/mongodb-ar21.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "Accountify",
      "desc": "Accountify, an innovative Android application for managing finances, represents a groundbreaking approach to financial management. Its seamless design empowers users to effortlessly track their expenses and income, revolutionizing their approach to personal finance. With its intuitive user interface and user experience, it simplifies the process of recording and categorizing transactions, fostering financial awareness.Accountify offers users the ability to create custom budgets and provides real-time insights into their expenses, facilitating informed financial decisions. Through informative graphs and summaries, users gain a comprehensive overview of their financial well-being. Security is a top priority, ensuring that data is stored securely and encrypted.This app redefines personal finance, merging convenience with effective money management. From daily spending to achieving long-term financial goals, Accountify serves as the ultimate companion, putting fiscal stability and control right at users' fingertips.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/android-ar21.svg",
        "assets/images/sqlite-ar21.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "NEWS TAK",
      "desc": "News Tak, my innovative Android news application, is a paradigm shift in the realm of information consumption. It has been meticulously designed to provide users with an all-encompassing platform to stay well-informed. Thanks to its user-friendly interface, users have the ability to explore a multitude of news categories, ranging from global events to niche interests.Real - time updates guarantee that the latest news is consistently available at their fingertips.The app offers intuitive navigation and personalized features, resulting in a tailor- made news experience for each user.By harnessing the power of Android, News Tak seamlessly merges aesthetics and functionality, making it suitable for both casual readers and news enthusiasts.By embracing modern design principles and cutting - edge technology, News Tak transforms the way users interact with news on their devices.It ushers in a new era of accessible and user - centric news consumption.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/android-ar21.svg",
        "assets/images/sqlite-ar21.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "COVID Tracker",
      "desc": "The COVID Tracker mobile application is a powerful tool designed to provide users with essential information and resources to navigate through the ongoing COVID-19 pandemic. This app serves as a comprehensive solution to help individuals stay informed, take necessary precautions, and access vital services during these challenging times.Key features of the COVID Tracker app include real-time updates on COVID-19 statistics, including case counts, recoveries, and fatalities. Users can easily access data on infection rates, testing centers, vaccination sites, and healthcare facilities in their area. The app also provides helpful information on COVID-19 symptoms, prevention measures, and guidelines from health authorities.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/android-ar21.svg",
        "assets/images/sqlite-ar21.svg"
      ]
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "Food Mania",
      "desc": "Food Mania is a dynamic Android application that reimagines the way we interact with food and culinary experiences. This project is designed to be a one-stop solution for food enthusiasts, both aspiring cooks and avid diners alike. With a sleek and intuitive user interface, Food Mania provides a platform where users can discover, create, and savor gastronomic delights.For foodies seeking culinary inspiration, the app offers an extensive library of recipes from around the world, accompanied by vibrant images and step- by - step instructions.Users can explore a diverse range of cuisines and cooking styles, making it an excellent resource for home chefs looking to expand their culinary repertoire.However, Food Mania isn't just for those who enjoy cooking at home. It also caters to foodies who prefer dining out. The app provides a location-based feature to discover nearby restaurants, cafes, and food trucks, complete with reviews, menus, and contact information. Users can easily make reservations or order takeout, simplifying the dining experience.In addition to these features, Food Mania encourages community engagement by allowing users to share their culinary creations, restaurant reviews, and food adventures with others.The app's social platform fosters a sense of belonging for food enthusiasts.The app prioritizes data security and ensures that user information remains private.Whether you're a home chef looking for fresh ideas or a food connoisseur exploring the local dining scene, Food Mania offers a delectable blend of functionality and community, enhancing your relationship with food and gastronomy.",
      "tools": [
        "assets/images/java-horizontal.svg",
        "assets/images/android-ar21.svg",
        "assets/images/sqlite-ar21.svg"
      ]
    }
  ];

}
