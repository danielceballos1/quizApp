import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';

@Component({
  selector: 'app-problem-areas-answer',
  standalone: true,
  imports: [BorderChangeDirective],
  templateUrl: './problem-areas-answer.component.html',
  styleUrls: ['./problem-areas-answer.component.css']
})
export class ProblemAreasAnswerComponent implements OnInit {

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}