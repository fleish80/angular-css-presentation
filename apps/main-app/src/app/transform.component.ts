import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'df-transform',
  standalone: true,
  imports: [],
  template: `
    <div class="box">
      <p>Content</p>
    </div>

    <div class="box move-right">
      <p>translateX(50px)</p>
    </div>

    <div class="box rotate">
      <p>rotate(45deg)</p>
    </div>

    <div class="box scale">
      <p>scale(1.5)</p>
    </div>

    <div class="box skew">
      <p>skew(20deg, 10deg)</p>
    </div>


  `,

  styles: `
    //The transform property takes a function that defines the type of transformation.
    // You can use multiple transformation functions together, separating them with a space.
    // The order of the functions matters, as they are applied from right to left.
    // The most common transformation functions are:
    // translate() - Moves an element along the x and y axes.
    // rotate() - Rotates an element around a fixed point.
    // scale() - Scales an element up or down.
    // skew() - Skews an element along the x and y axes.
    // matrix() - Combines all transformations into a single function.
    // The transform property can also be used to apply 3D transformations, such as:
    // translate3d() - Moves an element in 3D space.
    // rotate3d() - Rotates an element in 3D space.
    // scale3d() - Scales an element in 3D space.
    // perspective() - Sets the perspective view for 3D transformations.


    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      border: 1px solid black;
    }

    //translate(x, y): Moves an element along the X (horizontal) and Y (vertical) axes.
    //translateX(px) and translateY(px): Move an element along the X or Y axis individually.
   .move-right {
     transform: translateX(50px); /* Moves the element 50px to the right */
   }

    //rotate(angle): Rotates an element clockwise by a specified angle in degrees.
    .rotate {
      transform: rotate(45deg); /* Rotates the element 45 degrees */
    }

    //scale(x, y): Scales an element in size along the X and Y axes.
    //scaleX(value) and scaleY(value): Scale horizontally or vertically independently.
    .scale {
      transform: scale(1.5); /* Enlarges the element by 1.5x */
    }

    //skew(x-angle, y-angle): Skews or slants an element along the X and Y axes.
    //skewX(angle) and skewY(angle): Skew only along the X or Y axis.
    .skew {
      transform: skew(20deg, 10deg); /* Skews the element 20 degrees horizontally and 10 degrees vertically */
    }

    // CSS transformations are efficient for animations and transitions because they’re handled by the GPU,
    // making them smoother than other properties (like margin or top for movement).
    // Transformations are commonly used with transitions and animations to create smooth, performant effects.

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformComponent {}
