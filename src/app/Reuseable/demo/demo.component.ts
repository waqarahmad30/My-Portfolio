import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit, OnDestroy {
  products = [
    { image: 'assets/html.png', name: 'Bamboo Watch', price: 65, inventoryStatus: 'In Stock' },
    { image: 'assets/css.png', name: 'Black Watch', price: 72, inventoryStatus: 'Low Stock' },
    { image: 'assets/cs.png', name: 'Blue Band', price: 45, inventoryStatus: 'Out of Stock' },
    { image: 'assets/c++.png', name: 'Blue Band', price: 45, inventoryStatus: 'Out of Stock' },
    // Add more products as needed
  ];

  // currentIndex = 0;
  // autoSlideInterval: any;

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // startAutoSlide(): void {
  //   this.autoSlideInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 3000); // Slide every 3 seconds
  // }

  // // nextSlide(): void {
  // //   if (this.currentIndex < this.products.length - 1) {
  // //     this.currentIndex++;
  // //   } else {
  // //     this.currentIndex = 0;
  // //   }
  // // }

  // // prevSlide(): void {
  // //   if (this.currentIndex > 0) {
  // //     this.currentIndex--;
  // //   } else {
  // //     this.currentIndex = this.products.length - 1;
  // //   }
  // // }
  // nextSlide(): void {
  //   if (this.currentIndex < this.products.length - 1) {
  //     this.currentIndex++;
  //   } else {
  //     this.currentIndex = 0;
  //   }
  // }
  
  // prevSlide(): void {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   } else {
  //     this.currentIndex = this.products.length - 1;
  //   }
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.autoSlideInterval); // Clear interval when the component is destroyed
  // }

  // currentIndex = 0;

  // ngOnInit(): void {}

  // nextSlide(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.products.length;
  // }

  // prevSlide(): void {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.products.length) % this.products.length;
  // }
  // visibleProducts: any[] = [];
  // currentIndex = 0;
  // slideInterval: any;

  // ngOnInit(): void {
  //   this.updateVisibleProducts();
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.slideInterval);
  // }

  // updateVisibleProducts(): void {
  //   this.visibleProducts = this.products.slice(
  //     this.currentIndex,
  //     this.currentIndex + 2
  //   );
  // }

  // nextSlide(): void {
  //   this.currentIndex = (this.currentIndex + 2) % this.products.length;
  //   this.updateVisibleProducts();
  // }

  // prevSlide(): void {
  //   this.currentIndex =
  //     (this.currentIndex - 2 + this.products.length) % this.products.length;
  //   this.updateVisibleProducts();
  // }

  // startAutoSlide(): void {
  //   this.slideInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 3000); // Change slide every 3 seconds
  // }

  projects = [
    {
      title: 'Project One',
      image: './assets/html.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: './assets/css.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: './assets/c++.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: './assets/cs.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: './assets/python.png',
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
    }, 2000); // Slide every 3 seconds
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

}
