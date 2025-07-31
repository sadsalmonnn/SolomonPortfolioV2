import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aboutmepage',
  imports: [],
  templateUrl: './aboutmepage.html',
  styleUrl: './aboutmepage.css'
})

export class Aboutmepage{
  
  icons: string[] = [

    'angular',
    'bash',
    'bootstrap',
    'c',
    'css',
    'django',
    'flask',
    'git',
    'html',
    'java',
    'javascript',
    'linux',
    'npm',
    'postgresql',
    'python',
    'sql',
    'tailwind',
    'typescript'
    
  ];

  row_length: number = Math.ceil(this.icons.length / 3);

  get iconColumns(): string[][] {
    const width = window.innerWidth;
    let numCols = 2;

    if (width >= 1280) {
      numCols = 4;
    } else if (width >= 1024) {
      numCols = 4;
    } else if (width >= 768) {
      numCols = 3;
    }

    const columns: string[][] = Array.from({ length: numCols }, () => []);
    for (let i = 0; i < this.icons.length; i++) {
      const colIndex = i % numCols;
      columns[colIndex].push(this.icons[i]);
    }

    return columns;
  }
}



