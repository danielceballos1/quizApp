import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem-areas',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './problem-areas.component.html',
  styleUrls: ['./problem-areas.component.css']
})
export class ProblemAreasComponent implements OnInit {

  page2Questions: any;
  selectedQuestion: string | null = null;

  constructor(private quizService: QuizService) {}
  ngOnInit() {
    this.quizService.loadQuestions().subscribe((data) => {
      this.page2Questions = data;
      console.log('Page 2 Questions:', this.page2Questions);
    });
  }

  onQuestionClick(question: string): void {
    this.selectedQuestion = question;
    console.log(this.selectedQuestion);
  }

  onNextPage() {
    if (this.selectedQuestion) {
      this.quizService.navigateToNextPage();
    } else {
      alert('Skip or select answer')
    }
  }

  onSkipPage() {
    this.quizService.navigateToPreviousPage();
  }

}
  
