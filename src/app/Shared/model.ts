export class QuizModel{
    id:number;
    question:string;
    options:string[];
    answer:number;
    constructor(id, question, options){
        this.id = id;
        this.question = question;
        this.options = options;
    }
}