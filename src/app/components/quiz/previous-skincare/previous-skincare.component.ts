import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PreviousSkincareAnswerComponent } from './previous-skincare-answer/previous-skincare-answer.component';
import { QuizService } from '../../../services/quiz.service';

@Component({
  standalone: true,
  selector: 'app-previous-skincare',
  imports: [CommonModule, PreviousSkincareAnswerComponent],
  templateUrl: './previous-skincare.component.html',
  styleUrls: ['./previous-skincare.component.css']
})
export class PreviousSkincareComponent implements OnInit {

 
  page8Answers: any;
  selectedAnswer: string | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page8Answers = data['page8'];
      console.log('Page 8 Answers:', this.page8Answers);
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
  
