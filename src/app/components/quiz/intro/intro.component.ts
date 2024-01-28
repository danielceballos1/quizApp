import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  page1Questions: any;

  constructor(private quizService: QuizService) {}
  ngOnInit() {
    this.quizService.loadQuestions().subscribe((data) => {
      this.page1Questions = data;
      console.log('Page 1 Questions:', this.page1Questions);
    });
  }

  onNextPage(selectedAnswer: string) {
    console.log(selectedAnswer);
    this.quizService.navigateToNextPage();
  } 
}