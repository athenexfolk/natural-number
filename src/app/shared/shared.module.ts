import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatexRendererComponent } from './components/katex-renderer/katex-renderer.component';

@NgModule({
  declarations: [KatexRendererComponent],
  imports: [CommonModule],
  exports: [KatexRendererComponent],
})
export class SharedModule {}
