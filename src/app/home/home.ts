import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  fullName = 'Kirsten Keithleen Anne A. Zapanta';
  location = 'Porac, Pampanga';
  email = 'zapanta.kirsten01@gmail.com';
  phone = '0999 827 1078';

  profile = 'I am a highly adaptable and analytical Information Technology student with hands-on experience in customer service, administrative support, and technical tasks. Equipped with strong verbal and written communication, problem-solving, and organizational skills, I am proficient in a wide range of digital tools and software essential for corporate work. I am currently seeking entry-level opportunities or internships in Web Development and Quality Assurance where I can apply my technical foundation and contribute effectively to team goals while continuing to grow and develop professionally.';

  skills = [
    'HTML, CSS, & JavaScript',
    'Python',
    'Database Fundamentals',
    'Figma',
    'Google Workspace',
    'Research & Technical Documentation'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Packet Tracer', level: 'Intermediate' },
    { tool: 'MongoDB', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
