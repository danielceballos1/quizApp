import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { ProblemAreasAnswerComponent } from './problem-areas-answer/problem-areas-answer.component';

@Component({
  selector: 'app-problem-areas',
  imports: [CommonModule, ProblemAreasAnswerComponent],
  standalone: true,
  templateUrl: './problem-areas.component.html',
  styleUrls: ['./problem-areas.component.css']
})
export class ProblemAreasComponent implements OnInit {

  page2Answers: any;
  selectedAnswer: string | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page2Answers = data['page2'];
      console.log('Page 2 Answers:', this.page2Answers);
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
  
