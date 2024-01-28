import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problem-areas-answer',
  standalone: true,
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