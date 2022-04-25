import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
