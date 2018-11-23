import { Injectable } from '@angular/core';
import { QuizModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  quiz:QuizModel[];
  id:number;
  question:string;
  options:string[];
  answer:number;
  time:number = 5;


  points:number = 0;
  currentQuestionID:number = 0 ;
  constructor() {
    this.quiz = [
      {id:0, question:"oneQuestion", options:['first','second','third','fourth'], answer: 1},
      {id:1, question:"Two", options:['first','second','third','fourth'], answer: 1},
      {id:2, question:"Three", options:['first','second','third','fourth'], answer: 1},
      {id:3, question:"Four", options:['first','second','third','fourth'], answer: 1},
      {id:4, question:"Five", options:['first','second','third','fourth'], answer: 1},
      {id:5, question:"Six", options:['first','second','third','fourth'], answer: 1},
      {id:6, question:"Seven", options:['first','second','third','fourth'], answer: 1},
      {id:7, question:"Eight", options:['first','second','third','fourth'], answer: 1},
      {id:8, question:"Nine", options:['first','second','third','fourth'], answer: 1},
      {id:9, question:"Ten", options:['first','second','third','fourth'], answer: 1},
      {id:10, question:"Eleven", options:['first','second','third','fourth'], answer: 1},
      {id:11, question:"Twelve", options:['first','second','third','fourth'], answer: 1},
      {id:12, question:"Thirteen", options:['first','second','third','fourth'], answer: 1},
      {id:13, question:"Fourteen", options:['first','second','third','fourth'], answer: 1},
      {id:14, question:"Fifteen", options:['first','second','third','fourth'], answer: 1},
    ];}

   next(currentQuestionID){
        this.currentQuestionID = this.currentQuestionID + 1;
        this.quiz[0] = this.quiz[this.currentQuestionID];
   }

   autoFunction(){
    var sec:number = 5;
    setTimeout(()=>{
      this.next(this.currentQuestionID);
    },5000)
  }

  startTimer(){
    setInterval(()=>{
      if(this.time>0){
        this.time--;
      }else{
        this.autoFunction();
        this.time = 5;
      }
    },1000);
  }
  
   
}
