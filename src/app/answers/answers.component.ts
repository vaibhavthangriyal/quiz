import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Shared/service.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answerID:number;
  constructor(private service:ServiceService) {
   }

  ngOnInit() {
  }

  onAnsSelected(i, currentQuestionID){
      if(currentQuestionID <=13){
        if( i === this.service.quiz[currentQuestionID].answer){
          console.log("You Won");
          this.service.points = this.service.points + 100;
          this.service.points = this.service.points + this.service.time;
          this.service.next(currentQuestionID);
        }else{
          console.log("That's Wrong");
          this.service.next(currentQuestionID);
        }
      }else{
        console.log("QUESRION ARE FINISED");
      }
  }

 
}
