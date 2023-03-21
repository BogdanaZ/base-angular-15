import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ExercitiiComponent } from './components/exercitii/exercitii.component';
import { FeedbackEchipaComponent } from './components/feedback-echipa/feedback-echipa.component';
import { FeedbackExercitiiComponent } from './components/feedback-exercitii/feedback-exercitii.component';
import { FeedbackProiectComponent } from './components/feedback-proiect/feedback-proiect.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ExercitiiComponent,
    FeedbackEchipaComponent,
    FeedbackExercitiiComponent,
    FeedbackProiectComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
