import { Component, inject, model } from '@angular/core';
import { MatTab, MatTabBody, MatTabGroup } from '@angular/material/tabs';
import { TypesOfSelectorsComponent } from './types-of-selectors.component';
import { SpecificityComponent } from './specificity.component';
import { BoxModelComponent } from './box-model.component';
import { TransformComponent } from './transform.component';
import { FlexboxComponent } from './flexbox.component';
import { GridComponent } from './grid.component';
import { MeasurementUnitsComponent } from './measurement-units.component';
import { PseudoClassComponent } from './pseudo-class.component';
import { PseudoElementExampleComponent } from './pseudo-element.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatTabBody,
    MatTabGroup,
    MatTab,
    TypesOfSelectorsComponent,
    SpecificityComponent,
    SpecificityComponent,
    BoxModelComponent,
    TransformComponent,
    FlexboxComponent,
    GridComponent,
    MeasurementUnitsComponent,
    PseudoClassComponent,
    PseudoElementExampleComponent,
  ],
  selector: 'df-tabs',
  template: ` <mat-tab-group [selectedIndex]="selectedIndex()" (selectedIndexChange)="selectedIndexChange($event)">
    <mat-tab label="Types of CSS Selectors"><df-types-of-selectors /></mat-tab>
    <mat-tab label="Specificity"><df-specificity /></mat-tab>
    <mat-tab label="Box model"><df-box-model /></mat-tab>
    <mat-tab label="Transform"><df-transform /></mat-tab>
    <mat-tab label="Measurement Units"><df-measurement-units /></mat-tab>
    <mat-tab label="Flexbox"><df-flexbox /></mat-tab>
    <mat-tab label="Grid"><df-grid /></mat-tab>
    <mat-tab label="Pseudo Class"><df-pseudo-class /></mat-tab>
    <mat-tab label="Pseudo Element"><df-pseudo-element /></mat-tab>
  </mat-tab-group>`,
})
export class TabsComponent {

  selectedIndex= model<number>(0);
  private router = inject(Router);

  selectedIndexChange(index: number) {
    this.router.navigate([index]);
  }
}
