import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Portfolio';

  ham_vissible : boolean = false;


  ham_toggle()
  {
    this.ham_vissible = !this.ham_vissible;
  }

  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  // mode: boolean = false; // False by default (light mode)

  // toggleDarkMode() {
  //   this.mode = !this.mode; // Toggle mode
  //   const event = new CustomEvent('toggleDarkMode', { detail: { isDarkMode: this.mode } });
  //   window.dispatchEvent(event);
  
}
