import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'df-flexbox',
  standalone: true,
  imports: [],
  template: `
    <div class="navbar">
      <div class="nav-item">Home</div>
      <div class="nav-item">About</div>
      <div class="nav-item">Services</div>
      <div class="nav-item">Contact</div>
    </div>

  `,

  styles: `
    .navbar {
      background-color: #333;
      display: flex;
      justify-content: space-around;
      padding: 10px;
      align-items: center;
    }

    .nav-item {
      color: white;
      padding-inline: 10px;
      padding-block: 20px;
      text-align: center;
    }


    //flex-direction: Defines the main axis direction, controlling the direction of the flex items.

    //  row (default): Items are placed in a horizontal row from left to right.
    //  row-reverse: Items are placed in a horizontal row from right to left.
    //  column: Items are placed in a vertical column from top to bottom.
    //  column-reverse: Items are placed in a vertical column from bottom to top.
    .container {
      flex-direction: row; /* Arranges items in a row */
    }

    //justify-content: Aligns items along the main axis (horizontal if flex-direction is row, vertical if column).

    //flex-start: Aligns items at the start of the container.
    //flex-end: Aligns items at the end of the container.
    //center: Centers items along the main axis.
    //space-between: Places space between items.
    //space-around: Adds equal space around each item.
    .container {
      justify-content: center; /* Centers items horizontally */
    }

    //align-items: Aligns items along the cross axis(vertical if flex-direction is row, horizontal if column).

    //flex-start: Aligns items at the start of the cross axis.
    //flex-end: Aligns items at the end of the cross axis.
    //center: Centers items along the cross axis.
    //stretch: Stretches items to fill the container(default).
    //baseline: Aligns items to the baseline.
    .container {
      align-items: center; /* Centers items vertically */
    }

    //flex-wrap: Controls whether items should wrap to the next line if there isn't enough space.

    //nowrap: All items are on a single line(default).
    //wrap: Items wrap onto multiple lines.
    //wrap-reverse: Items wrap onto multiple lines in reverse.
    .container {
      flex-wrap: wrap; /* Allows items to wrap onto new lines */
    }

    //Properties for the Flex Items
    //flex-grow: Determines how much an item will grow relative to others.
    //A value of 1 allows the item to grow to fill the available space, while  0 (default) prevents it from growing.
    .item {
      flex-grow: 1; /* Item grows to fill available space */
    }

    //flex-shrink: Determines how much an item will shrink if necessary.
    //A value of 1 (default) allows shrinking, while 0 prevents it.
    .item {
      flex-shrink: 1; /* Item shrinks when space is limited */
    }

    //flex-basis: Specifies the initial size of a flex item before it grows or shrinks.
    //Accepts values like px, %, auto, etc.
    .item {
      flex-basis: 200px; /* Sets the initial size */
    }

    //align-self: Overrides the align-items setting for individual items, allowing specific alignment on the cross axis.
    //Values include flex-start, flex-end, center, stretch, and baseline.
    .item {
      align-self: flex-start; /* Aligns this item at the start */
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexboxComponent {}
