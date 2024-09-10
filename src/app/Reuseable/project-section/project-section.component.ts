import { CommonModule } from '@angular/common';
import { Component,OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit, OnDestroy{
  projects = [
    {
      title: 'BillBoard',
      image: './assets/billboard.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    {
      title: 'CityLocal',
      image: './assets/citylocal.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    {
      title: 'Portfolio',
      image: './assets/portfolio.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    // Add more projects as needed
  ];

  visibleProjects: any[] = [];
  currentIndex = 0;
  slideInterval: any;

  ngOnInit(): void {
    this.updateVisibleProjects();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  updateVisibleProjects(): void {
    this.visibleProjects = this.projects.slice(
      this.currentIndex,
      this.currentIndex + 2
    );
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 2) % this.projects.length;
    this.updateVisibleProjects();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 2 + this.projects.length) % this.projects.length;
    this.updateVisibleProjects();
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Slide every 3 seconds
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
  
}

