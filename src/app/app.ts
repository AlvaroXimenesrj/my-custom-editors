import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextEditor } from './shared/components/kolkov-editor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextEditor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningAppV2');
  rawHtml: string = ''
}
