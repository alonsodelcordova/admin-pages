import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEditorModule } from 'ngx-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule.forRoot({
      locals: {
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        underline: 'Underline',
        // ...
      },
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
