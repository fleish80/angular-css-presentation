import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'df-specificity',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>This is some text (0001)</p>
    <p class="highlight">This is some text (class="highlight")</p>

    <div class="container">
      <p class="highlight">This is some text (class="container" => class="highlight")</p>
    </div>

    <p class="container highlight">This is some text (class="container highlight")</p>

    <p class="highlight" id="main-paragraph">This is some text (class="highlight" id="main-paragraph")/p>

    <p class="highlight" id="main-paragraph" style="color: brown">This is some text (class="highlight" id="main-paragraph" style="color: brown")</p>
  `,
  styles: `

    //CSS specificity is a system for assigning weights to CSS selectors. When multiple selectors apply to the same element, specificity determines which rule takes precedence. It’s calculated based on four levels:

    //1. Inline styles
    //2. ID selectors
    //3. Class, attribute, and pseudo-class selectors
    //4. Element selectors and pseudo-elements

    .highlight {
      color: orange; /* Class selector (specificity: 0,0,1,0) */
    }


    p {
      color: red; /* Element selector (specificity: 0,0,0,1) */
    }



    .container .highlight {
      color: brown; /* Class selector (specificity: 0,0,2,0) */
    }

    .container.highlight {
      color: black; /* Class selector (specificity: 0,0,2,0) */
    }

    #main-paragraph {
      color: blue; /* ID selector (specificity: 0,1,0,0) */
    }


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecificityComponent {}
