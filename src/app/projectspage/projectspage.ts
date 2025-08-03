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
      imgpath: "/assets/images/projectimgs/treemap.png"
    },
        {
      title: "Drawing Application",
      gitlink: "https://github.com/sadsalmonnn/Digital-Drawing-Application",
      description: "Supports shape drawing, freehand tools, editing features, and file operations.",
      tags: ["java", "javafx", "css", "junit"],
      imgpath: "/assets/images/projectimgs/drawing-app.png"
    },
    {
      title: "Mysh Shell",
      gitlink: "https://github.com/sadsalmonnn/Mysh-Unix-Shell",
      description: "A modular Unix shell and concurrent client-server chat system in C using POSIX APIs and UNIX sockets.",
      tags: ["c", "posix apis", "unix sockets", "bash"],
      imgpath: "/assets/images/projectimgs/mysh.png"
    },
        {
      title: "Othello Game",
      gitlink: "https://github.com/sadsalmonnn/Othello-Game",
      description: "An OOP Othello game in Java with full game logic, rule enforcement, and modular design.",
      tags: ["python",],
      imgpath: "/assets/images/projectimgs/othello.png"
    },
]

}
