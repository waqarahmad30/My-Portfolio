import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { ProjectComponent } from './Pages/project/project.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path:'Home', component:HomeComponent},
    {path:'About', component:AboutComponent},
    {path:'Contact', component:ContactComponent},
    {path:'Experience', component:ExperienceComponent},
    {path:'Project', component:ProjectComponent}
];
