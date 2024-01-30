import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private currentPageSubject = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSubject;

  constructor(private http: HttpClient) {}

  loadQuestions() {
    return this.http.get('assets/questions.json');
  }

  navigateToNextPage() {
    const nextPage = this.currentPageSubject.value + 1;
    this.currentPageSubject.next(nextPage);
  }

  navigateToPreviousPage() {
    const previousPage = this.currentPageSubject.value - 1;
    this.currentPageSubject.next(previousPage);
  }
}
