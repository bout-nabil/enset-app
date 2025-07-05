import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterLink,
    RouterOutlet
  ], // Import RouterLink and RouterOutlet for navigation
  standalone: true
})
export class App {
  protected title = 'enset-app'; // This is the title of the application, used in the template
}
