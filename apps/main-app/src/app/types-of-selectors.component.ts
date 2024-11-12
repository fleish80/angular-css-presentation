import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'df-types-of-selectors',
  standalone: true,
  imports: [],
  template: `
    <p>Types of CSS Selectors works</p>

    <p class="highlight">Types of CSS Selectors works</p>

    <p id="header">Types of CSS Selectors works</p>

    <p style="font-weight: bold">Types of CSS Selectors works</p>

    <input type="text" />

    <p class="pseudo">
      Types of CSS Selectors works <br />
      Types of CSS Selectors works
    </p>
  `,
  styles: `
    //Universal Selector (*)
    //Applies styles to all elements.
    * {
      margin: 0;
      padding: 0;
    }

    //Element Selector (element)
    //Targets all instances of a specific HTML tag.
    p {
      color: green;
    }

    //Class Selector (.className)
    //Targets elements with a specific class.
    .highlight {
      background-color: yellow;
    }

    //ID Selector (#idName)
    //Targets an element with a specific ID (unique within the page).
    #header {
      font-size: 30px;
    }

    //Attribute Selector ([attribute=value])
    //Targets elements with a specific attribute or attribute value.
    [type="text"] {
      border-color: red;
    }

    //Pseudo-Classes and Pseudo-Elements (:pseudo-class, ::pseudo-element)
    //Apply styles to specific states or parts of an element.

    /* Pseudo-class */
    .pseudo:hover {
      color: orange;
    }

    /* Pseudo-element */
    .pseudo::first-line {
      font-weight: bold;
    }


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesOfSelectorsComponent {}
