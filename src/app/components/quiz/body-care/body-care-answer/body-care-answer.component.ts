import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';

@Component({
  selector: 'app-body-care-answer',
  standalone: true,
  imports: [BorderChangeDirective],
  templateUrl: './body-care-answer.component.html',
  styleUrls: ['./body-care-answer.component.css']
})
export class BodyCareAnswerComponent implements OnInit {

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}