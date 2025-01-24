import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReplaceWordPipe } from './pipes/replace-word.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReplaceWordPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-pipe';
  str = 'Hello world, welcome to the world of regex'
  replace = 'universe';
}
