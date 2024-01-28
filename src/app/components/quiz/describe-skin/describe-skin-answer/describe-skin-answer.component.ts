import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-describe-skin-answer',
  standalone: true,
  templateUrl: './describe-skin-answer.component.html',
  styleUrls: ['./describe-skin-answer.component.css']
})
export class DescribeSkinAnswerComponent implements OnInit {

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}