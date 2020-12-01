import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'examples',
    loadChildren: () =>
      import('./pages/examples/examples.module').then((m) => m.ExamplesModule),
  },
  {
    path: 'apollo',
    loadChildren: () =>
      import('./pages/apollo-exam/apollo-exam.module').then(
        (m) => m.ApolloExamModule
      ),
  },
  { path: '', redirectTo: '/examples', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
