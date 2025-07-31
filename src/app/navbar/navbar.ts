import { Component } from '@angular/core';
import { ExtraOptions } from '@angular/router';

const routerOptions : ExtraOptions = {
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled',
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  goToPart(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }


  
}
