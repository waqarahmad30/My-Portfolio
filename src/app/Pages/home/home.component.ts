import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutSectionComponent } from '../../Reuseable/about-section/about-section.component';
import { SkillSliderComponent } from '../../Reuseable/skill-slider/skill-slider.component';
import { ProjectSectionComponent } from '../../Reuseable/project-section/project-section.component';
import { DemoComponent } from '../../Reuseable/demo/demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AboutSectionComponent,SkillSliderComponent,ProjectSectionComponent,DemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  downloadFile(): void {
    const link = document.createElement('a');
    link.href = 'assets/Waqar.pdf';  // Path to the file in the assets folder
    link.download = 'Waqar CV.pdf';           // The name for the downloaded file
    link.click();                           // Programmatically trigger the download
  }

}
