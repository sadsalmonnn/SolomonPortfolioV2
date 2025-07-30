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
    const columns: string[][] = [[], [], []];
    for (let i = 0; i < this.icons.length; i++) {
      const colIndex = Math.floor(i / this.row_length);
      columns[colIndex].push(this.icons[i]);
    }
    return columns;
  }
}



