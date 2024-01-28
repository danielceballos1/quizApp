import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { HydratingIngredientsAnswersComponent } from './hydrating-ingredients-answers/hydrating-ingredients-answers.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hydrating-ingredients',
  standalone: true,
  imports: [HydratingIngredientsAnswersComponent, CommonModule],
  templateUrl: './hydrating-ingredients.component.html',
  styleUrls: ['./hydrating-ingredients.component.css']
})
export class HydratingIngredientsComponent implements OnInit {

  page3Answers: any;
  selectedAnswer: string | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page3Answers = data['page3'];
      console.log('Page 3 Answers:', this.page3Answers);
    });
  }

  onAnswerClick(answer: string): void {
    this.selectedAnswer = answer;
    console.log(this.selectedAnswer);
  }

  onNextPage() {
    if (this.selectedAnswer) {
      this.quizService.navigateToNextPage();
    } else {
      alert('Skip or select answer')
    }
  }

  onSkipPage() {
    this.quizService.navigateToPreviousPage();
  }

}
  
