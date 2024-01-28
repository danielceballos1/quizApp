import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BodyCareAnswerComponent } from './body-care-answer/body-care-answer.component';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-body-care',
  standalone: true,
  imports: [CommonModule, BodyCareAnswerComponent],
  templateUrl: './body-care.component.html',
  styleUrls: ['./body-care.component.css']
})
export class BodyCareComponent implements OnInit {

  page7Answers: any;
  selectedAnswer: string | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page7Answers = data['page7'];
      console.log('Page 7 Answers:', this.page7Answers);
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
  
