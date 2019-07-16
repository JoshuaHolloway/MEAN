import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import a reference to the PostCreateComponent class we created
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent, // Register AppComponent with angular
    PostCreateComponent // Add the PostCreateComponent classzz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Allow the component's selector to be used in index.html
  // -Essentially, this bootstrap array tells Angular that it should search the index.html file
  //  which is loaded, or in general the page in which the Angular app is loaded, for the app component,
  //  identified by its selector.
})
export class AppModule {}
