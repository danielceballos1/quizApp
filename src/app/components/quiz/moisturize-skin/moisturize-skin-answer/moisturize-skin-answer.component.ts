import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-moisturize-skin-answer',
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