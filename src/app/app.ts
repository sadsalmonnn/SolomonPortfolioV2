import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aboutmepage } from './aboutmepage/aboutmepage';
import { Contactmepage } from './contactmepage/contactmepage';
import { Experiencepage } from './experiencepage/experiencepage';
import { Homepage } from './homepage/homepage';
import { Projectspage } from './projectspage/projectspage';
import { Navbar } from './navbar/navbar';
import { ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

import { initialHomePageAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, Aboutmepage, Contactmepage, Experiencepage, Homepage, Projectspage, Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
    ngAfterViewInit() {
    initialHomePageAnimation();
  }

  protected readonly title = signal('portfolio');

  @ViewChild('paintBlob') paintBlob!: ElementRef;

  onMouseMove(event: MouseEvent) {
    const x = event.clientX - 80;
    const y = event.clientY - 80;

    gsap.to(this.paintBlob.nativeElement, {
      x: x,
      y: y,
      duration: 0.4,
      ease: 'power3.out'
    });
  }
}
