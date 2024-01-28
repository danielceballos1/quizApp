import { Component, OnInit } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { QuizService } from '../../services/quiz.service';
import { ProblemAreasComponent } from './problem-areas/problem-areas.component';
import { HydratingIngredientsComponent } from './hydrating-ingredients/hydrating-ingredients.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz',
  standalone: true,
  providers: [ QuizService],
  imports: [
    CommonModule,
    IntroComponent, 
    ProblemAreasComponent, 
    HydratingIngredientsComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentPage: number = 1;

  constructor(private quizService: QuizService) {}


  ngOnInit() {

  this.quizService.currentPage$.subscribe((page) => {
    this.currentPage = page;
  });
  }

}
