import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NnCheckerRoutingModule } from './nn-checker-routing.module';
import { AppPageComponent } from './pages/app-page/app-page.component';


@NgModule({
  declarations: [
    AppPageComponent
  ],
  imports: [
    CommonModule,
    NnCheckerRoutingModule
  ]
})
export class NnCheckerModule { }
