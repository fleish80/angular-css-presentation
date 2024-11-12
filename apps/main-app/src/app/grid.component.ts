import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'df-grid',
  standalone: true,
  imports: [],
  template: `
    <div class="grid-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>

  `,

  styles: `
    .grid-container {
      display: grid;
      grid-template-columns: 5fr 1fr;
      grid-template-rows: 1fr 3fr;
      gap: 10px;
    }

    .item {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {}
