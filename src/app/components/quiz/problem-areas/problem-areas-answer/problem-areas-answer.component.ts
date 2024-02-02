import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem-areas-answer',
  standalone: true,
  imports: [BorderChangeDirective, CommonModule],
  templateUrl: './problem-areas-answer.component.html',
  styleUrls: ['./problem-areas-answer.component.css']
})
export class ProblemAreasAnswerComponent implements OnInit {
  checkmark: boolean = false;
  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
    this.checkmark = !this.checkmark;
  }
}