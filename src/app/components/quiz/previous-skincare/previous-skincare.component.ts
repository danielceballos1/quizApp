import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-previous-skincare',
  imports: [CommonModule],
  templateUrl: './previous-skincare.component.html',
  styleUrls: ['./previous-skincare.component.css']
})
export class PreviousSkincareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
