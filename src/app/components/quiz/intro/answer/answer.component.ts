import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
 
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {

  isClicked: boolean = false;

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  
  onClick(): void {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
    this.answerClicked.emit(this.answer[0]);
  }
}