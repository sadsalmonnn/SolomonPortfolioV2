import { Component } from '@angular/core';
import { Experience } from '../models/experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencepage',
  imports: [CommonModule],
  templateUrl: './experiencepage.html',
  styleUrl: './experiencepage.css'
})
export class Experiencepage {
  experiences: Experience[] = [

    {
      startdate: "May 2025",
      enddate: "Aug 2025",
      title: "Bank Operations Officer",
      company: "Royal Bank of Canada",
      location: "Toronto, ON",
      description: "Processed high-security financial instruments and verified documents, ensuring compliance, accurate escalation, and confidentiality under strict deadlines using enterprise banking systems.",
    },
        {
      startdate: "Sep 2021",
      enddate: "Jan 2022",
      title: "Computer Engineering TA",
      company: "Oakville Trafalgar High School",
      location: "Oakville, ON",
      description: "Supported students with hands-on engineering tasks and taught networking and digital logic. Delivered lectures, created assessments, while giving feedback to improve learning outcomes.",
    },
        {
      startdate: "Nov 2021",
      enddate: "Mar 2022",
      title: "Restaurant Operations	 ",
      company: "Ramen Houzz",
      location: "Oakville, ON",
      description: "Managed online and in-person orders while restocking, sanitizing, and supporting kitchen staff. Maintained smooth operations and service during high-pressure hours.",
    },

  ]
}
