import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-skincare-answer',
  standalone: true,
  imports: [BorderChangeDirective, CommonModule],
  templateUrl: './previous-skincare-answer.component.html',
  styleUrls: ['./previous-skincare-answer.component.css'],
})
export class PreviousSkincareAnswerComponent implements OnInit {
  checkmark : boolean = false;
  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {}

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
    this.checkmark = !this.checkmark;
  }
}
