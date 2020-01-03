import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/component/directory.component';
import { DirectoryContentComponent } from './directory-content/component/directory-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    DirectoryContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
