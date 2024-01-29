import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { DescribeSkinAnswerComponent } from './describe-skin-answer/describe-skin-answer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-describe-skin',
  standalone: true,
  imports: [DescribeSkinAnswerComponent, CommonModule],
  templateUrl: './describe-skin.component.html',
  styleUrls: ['./describe-skin.component.css']
})
export class DescribeSkinComponent implements OnInit {

  page4Answers: any;
  selectedAnswer: string | null = null;
  arrow = "assets/images/arrow.png"
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page4Answers = data['page4'];
      console.log('Page 4 Answers:', this.page4Answers);
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
  
