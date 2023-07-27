import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrueMarkComponent } from './components/true-mark/true-mark.component';
import { FalseMarkComponent } from './components/false-mark/false-mark.component';
import { WarningCircleComponent } from './components/warning-circle/warning-circle.component';
import { WarningTriangleComponent } from './components/warning-triangle/warning-triangle.component';

@NgModule({
  declarations: [
    TrueMarkComponent,
    FalseMarkComponent,
    WarningCircleComponent,
    WarningTriangleComponent,
  ],
  imports: [CommonModule],
  exports: [
    TrueMarkComponent,
    FalseMarkComponent,
    WarningCircleComponent,
    WarningTriangleComponent,
  ],
})
export class IconModule {}
