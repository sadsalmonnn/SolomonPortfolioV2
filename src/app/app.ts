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

import { webpageAnimation } from './app.animations';

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

    // window.addEventListener("resize", () => {
    //   location.reload(); // refreshes the page
    // });

    // gsap.to("#preloader", {
    //   opacity: 0,
    //   duration: 0.5,
    //   onComplete: () => {
    //     const loader = document.getElementById("preloader");
    //     if (loader) loader.remove();
    //   }
    // });

    webpageAnimation();
  }

  protected readonly title = signal("Solomon's Portfolio");

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
