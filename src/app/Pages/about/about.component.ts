import { Component } from '@angular/core';
import { SkillSliderComponent } from '../../Reuseable/skill-slider/skill-slider.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillSliderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
