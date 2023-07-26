import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageComponent } from './pages/app-page/app-page.component';

const routes: Routes = [
  {
    path: "",
    component: AppPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NnCheckerRoutingModule { }
