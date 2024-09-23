import { Component } from '@angular/core';
import { SkillSliderComponent } from '../../Reuseable/skill-slider/skill-slider.component';
import { ContactSecComponent } from '../../Reuseable/contact-sec/contact-sec.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillSliderComponent,ContactSecComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
