import { Component, ElementRef, Input } from '@angular/core';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { Shared } from '../shared.module';

@Component({
  selector: 'kolkov-editor',
  imports: [
    Shared,
    AngularEditorModule
  ],
  templateUrl: './kolkov-editor.html',
  styleUrl: './kolkov-editor.scss',
})
export class TextEditor {

  @Input() editable: boolean = true
  @Input() width: string = ''
  @Input() content: string = ''
  @Input() showToolbar: boolean = true
  showSave = true
  config: any

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    let height = 250
    if (!this.showToolbar)
      height = height + 39


    this.setHeight(height)
    this.config = this.createConfig();

  }

  setHeight(px: number) {
    this.el.nativeElement.style.setProperty('--editor-height', px + 'px');
  }

  createConfig(): AngularEditorConfig {
    return {
      editable: this.editable,
      sanitize: false,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: this.showToolbar,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      toolbarPosition: 'bottom',
      toolbarHiddenButtons: [       
        [
          // 'bold',
          //'italic',
          'strikeThrough',
          'subscript',
          'superscript',
          'toggleHtml',
          'htmlCode'
        ],        
        [
          //'justifyFull',
          'indent',
          'outdent',
          'insertUnorderedList',
          'insertOrderedList',
          'heading',
          //'textColor',
          //'backgroundColor',
          'customClasses',
          'link',
          'unlink',
          'insertImage',
          'insertVideo',
          'insertHorizontalRule',
          'removeFormat',
          'undo',
          'redo',
          'toggleHtml',
          'htmlCode'
        ]
      ],
    };
  }
}
