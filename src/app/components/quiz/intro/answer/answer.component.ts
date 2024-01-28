// answer.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}