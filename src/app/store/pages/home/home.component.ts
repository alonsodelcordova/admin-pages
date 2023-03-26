import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnDestroy {
  editor: Editor = new Editor();

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  form = new FormGroup({
    editorContent: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
  });


  ngOnDestroy(): void {
    this.editor?.destroy();
  }
}
