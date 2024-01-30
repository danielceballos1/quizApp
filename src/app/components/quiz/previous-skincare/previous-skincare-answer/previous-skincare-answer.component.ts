import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-previous-skincare-answer',
  standalone: true,
  templateUrl: './previous-skincare-answer.component.html',
  styleUrls: ['./previous-skincare-answer.component.css'],
})
export class PreviousSkincareAnswerComponent implements OnInit {
  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {}

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}
