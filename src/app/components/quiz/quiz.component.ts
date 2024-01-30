import { Component, OnInit } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { QuizService } from '../../services/quiz.service';
import { ProblemAreasComponent } from './problem-areas/problem-areas.component';
import { HydratingIngredientsComponent } from './hydrating-ingredients/hydrating-ingredients.component';
import { CommonModule } from '@angular/common';
import { DescribeSkinComponent } from './describe-skin/describe-skin.component';
import { ProtectingSkinComponent } from './protecting-skin/protecting-skin.component';
import { MoisturizeSkinComponent } from './moisturize-skin/moisturize-skin.component';
import { BodyCareComponent } from './body-care/body-care.component';
import { PreviousSkincareComponent } from './previous-skincare/previous-skincare.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  providers: [QuizService],
  imports: [
    CommonModule,
    IntroComponent,
    ProblemAreasComponent,
    HydratingIngredientsComponent,
    DescribeSkinComponent,
    ProtectingSkinComponent,
    MoisturizeSkinComponent,
    BodyCareComponent,
    PreviousSkincareComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
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
