import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderChangeDirective } from '../../../../directive/border-change.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hydrating-ingredients-answers',
  standalone: true,
  imports: [BorderChangeDirective, CommonModule],
  templateUrl: './hydrating-ingredients-answers.component.html',
  styleUrls: ['./hydrating-ingredients-answers.component.css']
})
export class HydratingIngredientsAnswersComponent implements OnInit {
  checkmark : boolean = false;
  @Input() answer: any;
  @Output() answerClicked = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.answerClicked.emit(this.answer[0]);
    this.checkmark = !this.checkmark;
  }
}