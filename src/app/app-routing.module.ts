import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { NewanimalComponent } from './newanimal/newanimal.component';
import { AnimalslistComponent } from './animalslist/animalslist.component';
import { SingleanimalComponent } from './singleanimal/singleanimal.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'newanimal', component: NewanimalComponent },
  { path: 'animals/:type', component: AnimalslistComponent },
  { path: 'animals/:type/:id', component: SingleanimalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
