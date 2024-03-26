import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubtracaoComponent } from './pages/subtracao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubtracaoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subtracao';
}
