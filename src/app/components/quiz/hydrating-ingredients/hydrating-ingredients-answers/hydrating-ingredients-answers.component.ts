import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hydrating-ingredients-answers',
  standalone: true,
  templateUrl: './hydrating-ingredients-answers.component.html',
  styleUrls: ['./hydrating-ingredients-answers.component.css']
})
export class HydratingIngredientsAnswersComponent implements OnInit {

  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
  }
}