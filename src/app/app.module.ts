import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { ServiceService } from './Shared/service.service';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { RoutingService } from './Shared/routing.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuestionsComponent,
    AnswersComponent,
    QuizFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    ServiceService,
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
