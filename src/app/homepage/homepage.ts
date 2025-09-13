import { Component } from '@angular/core';
import { Aboutmepage } from '../aboutmepage/aboutmepage';

@Component({
  selector: 'app-homepage',
  imports: [Aboutmepage],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage{
  goToPart(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }


  
}
