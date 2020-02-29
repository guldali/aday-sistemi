import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CandidatesDetailComponent } from './candidates/candidates-detail/candidates-detail.component';


const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'candidates/:id', component: CandidatesDetailComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
