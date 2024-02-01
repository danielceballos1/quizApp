import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';

@Component({
  selector: 'app-hydrating-ingredients-answers',
  standalone: true,
  imports: [BorderChangeDirective],
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