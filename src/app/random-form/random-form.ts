import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-random-form',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './random-form.html',
  styleUrls: ['./random-form.css'],
})

export class RandomForm {
  min: number = 0;
  max: number = 100;
  result: number = 0;

  generateRandomNumber() {
    if (this.min > this.max) {
      alert("Minimum value cannot be greater than maximum value.");
      return;
    }
    this.result = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}