import { Component, ElementRef, EventEmitter, Input, Output, Signal } from '@angular/core';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { Shared } from '../shared.module';

@Component({
  selector: 'kolkov-editor',
  imports: [
    Shared,
    AngularEditorModule
  ],
  templateUrl: './kolkov-editor.component.html',
  styleUrl: './kolkov-editor.component.scss',
})
export class KolkovEditorComponent {

  @Input() editable: boolean = true
  @Input() width: string = ''
  @Input() content: string = ''
  @Input() showToolbar: boolean = true
  @Input() title: string = 'Título'
  @Output() saveContent: EventEmitter<any> = new EventEmitter<any>()
  public config: any
  private originValue: string = ''

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {

    this.originValue = this.content
    let height = 250

    if (!this.showToolbar)
      height = height + 39

    this.setHeight(height)

    this.config = this.createConfig();

  }

  setHeight(px: number) {
    this.el.nativeElement.style.setProperty('--editor-height', px + 'px');
  }

  cancel() {
    this.content = this.originValue
  }

  salvar() {
    this.originValue = this.content
    this.saveContent.emit(this.content)
  }

  get showSave() {
    return this.content != this.originValue
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
