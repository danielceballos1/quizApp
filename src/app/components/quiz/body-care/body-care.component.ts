import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BodyCareAnswerComponent } from './body-care-answer/body-care-answer.component';
import { QuizService } from '../../../services/quiz.service';
import { ProgressionBarComponent } from '../../progression-bar/progression-bar.component';

@Component({
  selector: 'app-body-care',
  standalone: true,
  imports: [CommonModule, BodyCareAnswerComponent, ProgressionBarComponent],
  templateUrl: './body-care.component.html',
  styleUrls: ['./body-care.component.css']
})
export class BodyCareComponent implements OnInit {

  currentQuizPage : number = 6;
  arrow = "assets/images/arrow.png"
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
   
      this.quizService.navigateToNextPage();
   
  }

  onSkipPage() {
    this.quizService.navigateToNextPage();
  }

  onPreviousPage(){
    this.quizService.navigateToPreviousPage();
  }

}
  
