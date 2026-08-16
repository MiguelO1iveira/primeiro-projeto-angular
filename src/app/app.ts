import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('faculdade');

  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    // Quando clicar, ele vai receber o valor contrário do valor atual
    
  }
}
