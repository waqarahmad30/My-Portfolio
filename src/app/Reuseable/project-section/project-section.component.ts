import { CommonModule } from '@angular/common';
import { Component,OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit, OnDestroy {
  projects = [
    {
      title: 'BillBoard',
      image: './assets/billboard.png',
      githubLink: 'https://github.com/waqarahmad30/BillBoard',
      demoLink: 'https://github.com/waqarahmad30/BillBoard'
    },
    {
      title: 'CityLocal',
      image: './assets/citylocal.png',
      githubLink: 'https://github.com/waqarahmad30/citylocal101',
      demoLink: 'https://github.com/waqarahmad30/citylocal101'
    },
    {
      title: 'Portfolio',
      image: './assets/portfolio.png',
      githubLink: 'https://github.com/waqarahmad30/My-Portfolio',
      demoLink: 'https://github.com/waqarahmad30/My-Portfolio'
    },
    // Add more projects as needed
  ];

  // visibleProjects: any[] = [];
  // currentIndex = 0;
  // slideInterval: any;

  // ngOnInit(): void {
  //   this.updateVisibleProjects();
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.slideInterval);
  // }

  // updateVisibleProjects(): void {
  //   this.visibleProjects = this.projects.slice(
  //     this.currentIndex,
  //     this.currentIndex + 2
  //   );
  // }

  // nextSlide(): void {
  //   this.currentIndex = (this.currentIndex + 2) % this.projects.length;
  //   this.updateVisibleProjects();
  // }

  // prevSlide(): void {
  //   this.currentIndex =
  //     (this.currentIndex - 2 + this.projects.length) % this.projects.length;
  //   this.updateVisibleProjects();
  // }

  // startAutoSlide(): void {
  //   this.slideInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 3000); // Slide every 3 seconds
  // }

  // openLink(url: string): void {
  //   window.open(url, '_blank');
  // }


  // Current index to track which project is displayed
  currentIndex = 0;

  // Store the interval ID to clear when component is destroyed
  slideInterval: any;

  // Method to navigate to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1; // Loop back to the last project
    }
  }

  // Method to navigate to the next slide
  nextSlide() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first project
    }
  }

  // Open the provided URL in a new tab
  openLink(url: string) {
    window.open(url, '_blank');
  }

  // Auto slide logic
  autoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  // ngOnInit - Initialize auto-sliding
  ngOnInit() {
    this.autoSlide(); // Start auto-slide when the component loads
  }

  // ngOnDestroy - Clean up the interval to avoid memory leaks
  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval); // Clear the interval when the component is destroyed
    }
  }
}

