import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoisturizeSkinAnswerComponent } from './moisturize-skin-answer/moisturize-skin-answer.component';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-moisturize-skin',
  standalone: true,
  imports: [CommonModule, MoisturizeSkinAnswerComponent],
  templateUrl: './moisturize-skin.component.html',
  styleUrls: ['./moisturize-skin.component.css']
})
export class MoisturizeSkinComponent implements OnInit {

  page6Answers: any;
  selectedAnswer: string | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page6Answers = data['page6'];
      console.log('Page 6 Answers:', this.page6Answers);
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
  
