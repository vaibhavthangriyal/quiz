import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from '../quiz-form/quiz-form.component';
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';

const  routes:Routes = [
  { path:'dashboard', component:QuizFormComponent },
  { path:'**', component:MainComponent, pathMatch: 'full'}
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class RoutingService {
  constructor() {}
    
}
