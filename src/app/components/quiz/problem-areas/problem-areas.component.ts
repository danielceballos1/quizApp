import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { ProblemAreasAnswerComponent } from './problem-areas-answer/problem-areas-answer.component';
import { ProgressionBarComponent } from '../../progression-bar/progression-bar.component';


@Component({
  selector: 'app-problem-areas',
  imports: [CommonModule, ProblemAreasAnswerComponent, ProgressionBarComponent],
  standalone: true,
  templateUrl: './problem-areas.component.html',
  styleUrls: ['./problem-areas.component.css'],
})
export class ProblemAreasComponent implements OnInit {
  currentQuizPage: number = 1;
  page2Answers: any;
  selectedAnswer: string | null = null;
  arrow = 'assets/images/arrow.png';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page2Answers = data['page2'];
      console.log('Page 2 Answers:', this.page2Answers);
      console.log('Page 2 :', this.page2Answers);
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
      alert('Skip or select answer');
    }
  }

  onSkipPage() {
    this.quizService.navigateToNextPage();
  }

  onPreviousPage() {
    this.quizService.navigateToPreviousPage();
  }
}
