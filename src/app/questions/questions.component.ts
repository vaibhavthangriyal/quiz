import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Shared/service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionID:number;

  constructor(private service:ServiceService) {
    this.questionID = service.currentQuestionID;
   }

  ngOnInit() {
    
  }

}
