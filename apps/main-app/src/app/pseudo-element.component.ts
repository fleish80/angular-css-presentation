import { Component } from '@angular/core';

@Component({
  selector: 'df-pseudo-element',
  template: `
    <div class="container">
      <h2 class="heading">Pseudo-Element Demonstration</h2>
      <p class="text">This paragraph contains a decorative pseudo-element.</p>
    </div>
  `,
  styles: [`
    /* Container styling */
    .container {
      padding: 20px;
      background-color: #fafafa;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    /* Heading styling */
    .heading {
      position: relative;
      font-size: 24px;
      color: #333;
    }

    /* Pseudo-element ::before */
    .heading::before {
      content: '★ '; /* Adds a decorative star before the heading */
      color: #ff9800;
      font-size: 24px;
    }

    /* Pseudo-element ::after */
    .heading::after {
      content: ' ★'; /* Adds a decorative star after the heading */
      color: #ff9800;
      font-size: 24px;
    }

    /* Paragraph styling */
    .text {
      position: relative;
      font-size: 18px;
      color: #444;
      margin-top: 20px;
    }

    /* Pseudo-element ::after for paragraph */
    .text::after {
      content: ' (Decorative content using ::after)'; /* Adds decorative text after the paragraph */
      font-style: italic;
      color: #888;
    }
  `],
  standalone: true,
})
export class PseudoElementExampleComponent {}
