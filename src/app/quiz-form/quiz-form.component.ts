import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../Shared/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  public id:number = 0;
  arr = [];
  op:string[] = [];
  constructor(private service:ServiceService) { 
    this.arr = this.service.quiz[0].options;
  }
  ngOnInit() {
  }

  onSubmit(quizForm:NgForm){
    this.id = quizForm.value.questionId;
    this.service.quiz[this.id].id = quizForm.value.questionId;
    this.service.quiz[this.id].question = quizForm.value.question;
    this.service.quiz[this.id].answer = quizForm.value.answer;
    for(var i=0; i<4; i++){
      this.service.quiz[this.id].options[0] = quizForm.value.option0;
      this.service.quiz[this.id].options[1] = quizForm.value.option1;
      this.service.quiz[this.id].options[2] = quizForm.value.option2;
      this.service.quiz[this.id].options[3] = quizForm.value.option3;
    }
  }
  loadNextQues(quizForm:NgForm){
    this.onSubmit(quizForm);
    this.id = this.id + 1;
    quizForm.value.questionId = this.id;
  }
}
