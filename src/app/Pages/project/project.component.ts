import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      id: 1,
      title: 'BillBoard',
      description: 'A personal project where users can list their advertising boards. Features include user authentication (login and signup) and full admin functionality for managing listings, such as creating, reading, updating, and deleting content.',
      features: [
        'Developed using ASP.NET (MVC) with Bootstrap for a modern, responsive UI.',
        'Cross-device responsive design for an optimal user experience.',
        'Integrated MySQL for efficient data handling and storage.',
        'Dynamic data fetching and secure data storage.'
      ],
      images: [
        'assets/billboard.png',
        'assets/billboard2.png',
        'assets/billboard3.png',
        'assets/billboard4.png'
      ],
      github: 'https://github.com/waqarahmad30/BillBoard',
      liveDemo: 'https://github.com/waqarahmad30/BillBoard'
    },
    {
      id: 2,
      title: 'CityLocal',
      description: 'A cloned website inspired by the Q.R.G. product, developed using JavaScript, HTML, and CSS. It showcases a modern and clean design.',
      features: [
        'Built using HTML5, CSS3, and JavaScript for an interactive user experience.',
        'Fully responsive across different devices and screen sizes.',
        'Includes a functional carousel and user input forms.'
      ],
      images: [
        'assets/citylocal.png',
        'assets/citylocal2.png',
        'assets/citylocal3.png',
        'assets/citylocal4.png',
        'assets/citylocal5.png'
      ],
      github: 'https://github.com/waqarahmad30/citylocal101',
      liveDemo: 'https://github.com/waqarahmad30/citylocal101'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'A personal website built to showcase my skills, projects, and professional journey, developed using Angular 18. It features a clean and modern interface, optimized for performance and user engagement.',
      features: [
        'Built using Angular 18 for a dynamic and scalable structure.',
        'Fully responsive design for seamless viewing across all devices.',
        'Includes interactive sections such as project showcases, skill sliders, and a contact form.'
      ],
      images: [
        'assets/portfolio.png',
        'assets/portfolio2.png',
        'assets/portfolio3.png'
      ],
      github: 'https://github.com/waqarahmad30/My-Portfolio',
      liveDemo: 'https://github.com/waqarahmad30/My-Portfolio'
    }
    
  ];

}
