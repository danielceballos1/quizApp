import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer/answer.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, AnswerComponent],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  page1Answers: any;

  constructor(private quizService: QuizService) {}
  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page1Answers = data['page1'];
      console.log('Page 1 Answers:', this.page1Answers);
    });
  }

  onNextPage(selectedAnswer: string) {
    console.log(selectedAnswer);
    this.quizService.navigateToNextPage();
  } 

}