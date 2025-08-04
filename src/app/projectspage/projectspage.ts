import { Component } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projectspage',
  imports: [],
  templateUrl: './projectspage.html',
  styleUrl: './projectspage.css'
})
export class Projectspage {

  projects: Project[] = [
    {
      title: "File Visualizer",
      gitlink: "https://github.com/sadsalmonnn/Trees-for-Treemap",
      description: "An interactive file system visualizer, featuring a recursive treemap for intuitive data exploration.",
      tags: ["python", "py os"],
      imgpath: "./assets/images/projectimgs/treemap.jpeg"
    },
        {
      title: "Drawing Application",
      gitlink: "https://github.com/sadsalmonnn/Digital-Drawing-Application",
      description: "Supports shape drawing, freehand tools, editing features, and file operations.",
      tags: ["java", "javafx", "css", "junit"],
      imgpath: "./assets/images/projectimgs/drawing-app.jpeg"
    },
    {
      title: "Mysh Shell",
      gitlink: "https://github.com/sadsalmonnn/Mysh-Unix-Shell",
      description: "A modular Unix shell and concurrent client-server chat system in C using POSIX APIs and UNIX sockets.",
      tags: ["c", "posix apis", "unix sockets", "bash"],
      imgpath: "./assets/images/projectimgs/mysh.jpeg"
    },
        {
      title: "Othello Game",
      gitlink: "https://github.com/sadsalmonnn/Othello-Game",
      description: "An OOP Othello game in Java with full game logic, rule enforcement, and modular design.",
      tags: ["python",],
      imgpath: "./assets/images/projectimgs/othello.jpeg"
    }, {
      title: "Simple Portfolio",
      gitlink: "https://github.com/sadsalmonnn/SolomonPortfolio.git",
      description: "A personal portfolio showcasing software projects, built with modern web technologies",
      tags: ["angular", "tailwind", "typescript", "html", "css"],
      imgpath: "./assets/images/projectimgs/portfolio1.jpeg"
    }, {
      title: "Animated Portfolio",
      gitlink: "https://github.com/sadsalmonnn/SolomonPortfolioV2.git",
      description: "A responsive Angular portfolio featuring an animated timeline, project showcase, and dynamic layout.",
      tags: ["angular", "tailwind", "typescript", "html", "css"],
      imgpath: "./assets/images/projectimgs/portfolio2.jpeg"
    }
]

}
