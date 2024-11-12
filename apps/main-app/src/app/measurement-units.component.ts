import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'df-measurement-units',
  standalone: true,
  imports: [],
  template: `
    <h2>Example 1: Pixels (px)</h2>
    <div class="box">200px x 100px</div>

    <h2>Example 2: Percentages (%)</h2>
    <div class="container">80% Width of Parent</div>

    <h2>Example 3: em and rem</h2>
    <div class="text">1.5rem Font Size, 2em Top Margin</div>

    <h2>Example 4: Viewport Units (vw, vh)</h2>
    <div class="fullscreen">100vw x 100vh Fullscreen</div>

    <h2>Example 5: CSS Grid with Fractional Units (fr)</h2>
    <div class="grid-container">
      <div class="item">1fr</div>
      <div class="item">2fr</div>
    </div>
  `,

  styles: `
    /* Example 1: Pixels */
    /* Pixels are fixed units, commonly used for precise control over element dimensions. */
    .box {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      margin: 10px;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }

    /* Example 2: Percentages */
    /* Percentages are relative to the parent element, which makes them flexible for responsive layouts. */
    .container {
      width: 80%; /* Relative to the parent element's width */
      background-color: lightcoral;
      margin: 10px auto;
      text-align: center;
      padding: 20px;
      font-weight: bold;
    }

    /* Example 3: em and rem */
    /* em is relative to the font size of the element, while rem is relative to the root font size. */
    html {
      font-size: 16px; /* Base font size for rem calculations */
    }
    .text {
      font-size: 1.5rem; /* 24px based on root font size */
      margin-top: 2em; /* Margin twice the element’s font size */
      background-color: lightgoldenrodyellow;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }

    /* Example 4: Viewport units */
    /* vw and vh are relative to the viewport width and height, great for full-screen elements. */
    .fullscreen {
      width: 90vw; /* Full viewport width */
      height: 100vh; /* Full viewport height */
      background-color: lightgreen;
      text-align: center;
      line-height: 100vh;
      font-weight: bold;
    }

    /* Example 5: CSS Grid with Fractional Units */
    /* fr units in CSS Grid allocate space proportionally based on available space. */
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 2fr; /* Fractional units */
      gap: 10px;
      margin: 20px;
    }
    .item {
      background-color: lightpink;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeasurementUnitsComponent {}
