import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'df-box-model',
  standalone: true,
  imports: [],
  template: `
<!--    <div class="box">-->
<!--      <p>Content</p>-->
<!--    </div>-->

    <div class="box-padding">
      <p>Padding</p>
    </div>

<!--    <div class="box-border">-->
<!--      <p>Border</p>-->
<!--    </div>-->

<!--    <div class="box-margin">-->
<!--      <p>Margin</p>-->
<!--    </div>-->
  `,

  styles: `
    //The CSS Box Model consists of several layers around the content of an element:

    //1. Content: The actual content, like text or images.
    //2. Padding: Space between the content and the border.
    //3. Border: The border around the padding (visible if set).
    //4. Margin: Space outside the border, creating space between elements.
    //5. Each part plays a unique role in how elements are spaced and structured


    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
    }

    .box-padding {
      width: 200px;
      height: 200px;
      //padding: 20px;

      padding-inline-start: 20px;

      //do not use padding-left, padding-right, padding-top, padding-bottom
      //padding-inline-start: 10px;
      //padding-inline-end: 10px;
      //padding-inline: 10px 50px;
      //padding-block-start: 10px;
      //padding-block-end: 10px;
      background-color: lightcoral;
      //box-sizing: border-box;
    }

    .box-border {
      width: 200px;
      height: 200px;
      padding: 20px;
      border: 1px solid black;
      background-color: lightcyan;
      //box-sizing: border-box;
    }

    .box-margin {
      width: 200px;
      height: 200px;
      padding: 20px;
      border: 1px solid black;
      margin: 20px;
      background-color: lightgoldenrodyellow;
      box-sizing: border-box;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxModelComponent {}
