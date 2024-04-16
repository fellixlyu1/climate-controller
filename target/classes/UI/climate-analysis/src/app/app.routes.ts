import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostClimateComponent} from "./components/post-climate/post-climate.component";

export const routes: Routes = [
  {path: 'climate', component: PostClimateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
