import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-care-answer',
  standalone: true,
  imports: [BorderChangeDirective, CommonModule],
  templateUrl: './body-care-answer.component.html',
  styleUrls: ['./body-care-answer.component.css']
})
export class BodyCareAnswerComponent implements OnInit {
  smallCircle : boolean = false;
  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
    this.smallCircle = !this.smallCircle;
  }
}