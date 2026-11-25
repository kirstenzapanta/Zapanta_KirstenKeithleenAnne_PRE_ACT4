import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  // @if
  showProjects = true;

  // @for
  projects = [
    { name: 'Personal CV Website', tech: 'Angular' },
    { name: 'Matcha Haven Website', tech: 'HTML and CSS' },
    { name: 'AquaStream Web Application', tech: 'HTML, CSS, JavaScript, and MySQL' },
    { name: 'AquaStream Website', tech: 'HTML, CSS, and JavaScript' },
  ];

  // @switch
  selectedLevel = 'All';
  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Packet Tracer', level: 'Intermediate' },
    { tool: 'MongoDB', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies() {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }
    return this.proficiencies.filter(item => item.level === this.selectedLevel);
  }
}
