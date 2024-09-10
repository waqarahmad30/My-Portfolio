import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skill-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-slider.component.html',
  styleUrl: './skill-slider.component.css'
})
export class SkillSliderComponent{
  images = [
    {url:"assets/html.png",title:"HTML"},
    {url:"assets/css.png",title:"CSS"},
    {url:"assets/javaScript.png",title:"JavaScript"},
    {url:"assets/typeScript.png",title:"TypeScript"},
    {url:"assets/c++.png",title:"C++"},
    {url:"assets/cs.png",title:"C#"},
    {url:"assets/python.png",title:"Python"},
    {url:"assets/.net.png",title:".NET MVC"},
    {url:"assets/angular.png",title:"Angular"},
    {url:"assets/studio.png",title:"Visual Studio"}





  ];
  

}
