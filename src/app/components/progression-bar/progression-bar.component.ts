import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-progression-bar',
  standalone: true,
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.css']
})
export class ProgressionBarComponent implements OnInit {

  @Input() currentQuizPage: number = 1;
  // back-btn : 'assets/images/arrow.png'
  backBtn = "assets/images/arrow.png"

  constructor(private quizService: QuizService) { }

  calculateProgressWidth(): string {
    const totalQuizPages = 7;
    const progressPercentage = (this.currentQuizPage / totalQuizPages) * 100;
    return `${progressPercentage}%`;
  }

  ngOnInit() {
  }

  onPreviousPage(){
    this.quizService.navigateToPreviousPage();
  }

}