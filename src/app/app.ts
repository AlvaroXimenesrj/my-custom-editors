import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KolkovEditorComponent } from './shared/components/kolkov-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KolkovEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningAppV2');
  rawHtml: string = ''
}
