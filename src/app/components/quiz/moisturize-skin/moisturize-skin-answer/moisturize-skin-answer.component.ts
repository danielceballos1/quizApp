import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';

@Component({
  selector: 'app-moisturize-skin-answer',
  imports: [BorderChangeDirective],
  standalone: true,
  templateUrl: './moisturize-skin-answer.component.html',
  styleUrls: ['./moisturize-skin-answer.component.css']
})
export class MoisturizeSkinAnswerComponent implements OnInit {

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}