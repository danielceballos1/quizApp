import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { DescribeSkinAnswerComponent } from './describe-skin-answer/describe-skin-answer.component';
import { CommonModule } from '@angular/common';
import { ProgressionBarComponent } from '../../progression-bar/progression-bar.component';

@Component({
  selector: 'app-describe-skin',
  standalone: true,
  imports: [DescribeSkinAnswerComponent, CommonModule, ProgressionBarComponent],
  templateUrl: './describe-skin.component.html',
  styleUrls: ['./describe-skin.component.css']
})
export class DescribeSkinComponent implements OnInit {
  currentQuizPage: number = 3;
  page4Answers: any;
  selectedAnswer: string | null = null;
  arrow = "assets/images/arrow.png"
  selectedRectangleIndex: number = 1;
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page4Answers = data['page4'];
      console.log('Page 4 Answers:', this.page4Answers);
    });
  }


  onLeftClick(index: number) {
    console.log(`Left click on rectangle ${index}`);
    this.selectedRectangleIndex = index;
  }
  
  onRightClick(index: number) {
    console.log(`Right click on rectangle ${index}`);
    this.selectedRectangleIndex = index;
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
  
