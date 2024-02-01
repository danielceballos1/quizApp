import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';

@Component({
  selector: 'app-previous-skincare-answer',
  standalone: true,
  imports: [BorderChangeDirective],
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
