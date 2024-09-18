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
      title: 'Project One',
      description: 'This is the description for Project One.',
      image: 'assets/project-1.png',
      github: 'https://github.com/waqarahmad30/project1',
      liveDemo: 'https://waqarahmad.com/project1'
    },
    {
      title: 'Project Two',
      description: 'This is the description for Project Two.',
      image: 'assets/project-2.png',
      github: 'https://github.com/waqarahmad30/project2',
      liveDemo: 'https://waqarahmad.com/project2'
    }
    // Add more projects as needed
  ];

}
