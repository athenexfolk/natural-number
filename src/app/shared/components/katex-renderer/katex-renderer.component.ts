import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import katex from 'katex';

@Component({
  selector: 'katex',
  template: '<span #katex></span>',
})
export class KatexRendererComponent implements AfterViewInit {
  @Input() mode = false;
  @Input() expression: string = '';

  @ViewChild('katex', { static: true }) katexContainer!: ElementRef;

  ngAfterViewInit() {
    let container = this.katexContainer.nativeElement;
    katex.render(this.expression, container);
    try {
      katex.render(this.expression, container, {
        throwOnError: false,
        displayMode: this.mode,
        
      });
    } catch (error: any) {
      this.katexContainer.nativeElement.textContent = `Error: ${error.message}`;
    }
  }
}
