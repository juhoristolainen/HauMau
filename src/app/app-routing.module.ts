import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'etusivu', pathMatch: 'full' },
  { path: 'etusivu', component: FrontpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
