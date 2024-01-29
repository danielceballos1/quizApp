import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ProgressionBarComponent } from '../../progression-bar/progression-bar.component';

@Component({
  selector: 'app-protecting-skin',
  standalone: true,
  imports: [CommonModule, ProgressionBarComponent],
  templateUrl: './protecting-skin.component.html',
  styleUrls: ['./protecting-skin.component.css']
})
export class ProtectingSkinComponent implements OnInit {

  currentQuizPage : number = 4;
  page5Answers: any;
  image = "assets/images/woman-crepe-halfway-there.gif"
  selectedAnswer: string | null = null;
  arrow = "assets/images/arrow.png"

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestions().subscribe((data: any) => {
      this.page5Answers = data['page4'];
      console.log('Page 4 Answers:', this.page5Answers);
    });
  }

  onNextPage() {
      this.quizService.navigateToNextPage();
  }

  onSkipPage() {
    this.quizService.navigateToPreviousPage();
  }

}
  
