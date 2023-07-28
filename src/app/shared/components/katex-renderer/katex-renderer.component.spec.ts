import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatexRendererComponent } from './katex-renderer.component';

describe('KatexRendererComponent', () => {
  let component: KatexRendererComponent;
  let fixture: ComponentFixture<KatexRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KatexRendererComponent]
    });
    fixture = TestBed.createComponent(KatexRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
