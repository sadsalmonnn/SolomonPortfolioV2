import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aboutmepage } from './aboutmepage/aboutmepage';
import { Contactmepage } from './contactmepage/contactmepage';
import { Experiencepage } from './experiencepage/experiencepage';
import { Homepage } from './homepage/homepage';
import { Projectspage } from './projectspage/projectspage';
import { Navbar } from './navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, Aboutmepage, Contactmepage, Experiencepage, Homepage, Projectspage, Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
