import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NnCheckingRoutingModule } from './nn-checking-routing.module';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from 'src/app/icon/icon.module';


@NgModule({
  declarations: [
    AppPageComponent
  ],
  imports: [
    CommonModule,
    NnCheckingRoutingModule,
    ReactiveFormsModule,
    IconModule
  ]
})
export class NnCheckingModule { }
