import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingcomponets = [Page2Component]