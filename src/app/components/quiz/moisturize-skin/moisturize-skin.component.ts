import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoisturizeSkinAnswerComponent } from './moisturize-skin-answer/moisturize-skin-answer.component';
import { QuizService } from '../../../services/quiz.service';
import { ProgressionBarComponent } from '../../progression-bar/progression-bar.component';

@Component({
  selector: 'app-moisturize-skin',
  standalone: true,
  imports: [CommonModule, MoisturizeSkinAnswerComponent, ProgressionBarComponent],
  templateUrl: './moisturize-skin.component.html',
  styleUrls: ['./moisturize-skin.component.css']
})
export class MoisturizeSkinComponent implements OnInit {

  currentQuizPage: number = 5;
  arrow = "assets/images/arrow.png"
  page6Answers: { [key: string]: any } = {};
  selectedAnswer: string | null = null;
  selectedRectangleIndex: number | null = 1;
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page6Answers = data['page6'];
      console.log('Page 6 Answers:', this.page6Answers);
    });
  }

  onRectangleClick(index: number): void {
    if (!isNaN(index)) {
      this.selectedRectangleIndex = index;
      console.log('Selected Rectangle Index:', this.selectedRectangleIndex);
  
      // Fetch and set the corresponding data for the selected rectangle
      if (this.selectedRectangleIndex !== null) {
        const selectedAnswerKey : any = 'answer' + this.selectedRectangleIndex;
        this.selectedAnswer = this.page6Answers[selectedAnswerKey as keyof typeof this.page6Answers];
      }
    } else {
      console.error('Invalid rectangle index:', index);
    }
  }

  onAnswerClick(answer: string): void {
    this.selectedAnswer = answer;
    console.log(this.selectedAnswer);
  }

  onNextPage() {
    
      this.quizService.navigateToNextPage();
   
  }

  onPreviousPage() {
    this.quizService.navigateToPreviousPage();
  }

  onSkipPage() {
  this.quizService.navigateToNextPage();
  }
}
  
