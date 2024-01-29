import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PreviousSkincareAnswerComponent } from './previous-skincare-answer/previous-skincare-answer.component';
import { QuizService } from '../../../services/quiz.service';
import { ProgressionBarComponent } from '../../progression-bar/progression-bar.component';

@Component({
  standalone: true,
  selector: 'app-previous-skincare',
  imports: [CommonModule, PreviousSkincareAnswerComponent, ProgressionBarComponent],
  templateUrl: './previous-skincare.component.html',
  styleUrls: ['./previous-skincare.component.css']
})
export class PreviousSkincareComponent implements OnInit {

  currentQuizPage : number = 7;
  isSubmitClicked: boolean = false;
  arrow = "assets/images/arrow.png"
  x = "assets/images/❌.png"
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
      this.isSubmitClicked = true;
    } else {
      alert('Skip or select answer')
    }
  }

  onSkipPage() {
    // this.quizService.navigateToNextPage();
    if (this.selectedAnswer) {
      this.isSubmitClicked = true;
    } else {
      alert('Last page, select answer')
    }
  }

  onPreviousPage(){
    this.quizService.navigateToPreviousPage();
  }

}
  
