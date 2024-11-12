import { Component } from '@angular/core';

@Component({
  selector: 'df-pseudo-class',
  standalone: true,
  template: `
    <div class="container">
      <h2>Pseudo-Class Demonstration</h2>
      <button class="btn">Hover Over Me!</button>
      <input type="text" class="input" placeholder="Focus on me!">
    </div>
  `,
  styles: [`
    /* Container styling */
    .container {
      padding: 20px;
      background-color: #f0f0f0;
      text-align: center;
      border-radius: 8px;
    }

    /* Button styling */
    .btn {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    /* Pseudo-class :hover */
    .btn:hover {
      background-color: #0056b3; /* Changes background color when the mouse hovers over the button */
    }

    /* Pseudo-class :active */
    .btn:active {
      background-color: #004494; /* Darkens the color when the button is clicked */
    }

    /* Input field styling */
    .input {
      margin-top: 20px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      transition: border-color 0.3s ease;
    }

    /* Pseudo-class :focus */
    .input:focus {
      border-color: #007bff; /* Changes border color when the input field is focused */
    }
  `]
})
export class PseudoClassComponent {}
