import { Component, OnInit } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { QuizService } from '../../services/quiz.service';


@Component({
  selector: 'app-quiz',
  standalone: true,
  providers: [ QuizService],
  imports: [IntroComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentPage: number = 1;

  constructor(private quizService: QuizService) {}


  ngOnInit(): void {

  this.quizService.currentPage$.subscribe((page) => {
    this.currentPage = page;
  });
  }

}
