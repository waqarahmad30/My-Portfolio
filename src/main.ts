import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import'font-awesome/css/font-awesome.min.css';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  // Function to apply dark mode
function applyDarkMode(isDarkMode: boolean) {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Apply dark mode based on saved user preference in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
applyDarkMode(isDarkMode);

// Optional: Add a listener for dark mode toggle
window.addEventListener('toggleDarkMode', (event: any) => {
  const darkModeState = event.detail.isDarkMode;
  localStorage.setItem('darkMode', String(darkModeState));
  applyDarkMode(darkModeState);
});