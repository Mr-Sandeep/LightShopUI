import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JustCheckComponent } from './just-check/just-check.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TemplateExerciseComponent } from './template-exercise/template-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    JustCheckComponent,
    UserProfileComponent,
    TemplateExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
