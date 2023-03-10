import { AuthGuard } from './core/auth/auth.guard';
import { WelcomeModule } from './features/welcome/welcome.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { FilmCreateComponent } from './features/film/film-create/film-create.component';
import { RegistaCreateComponent } from './features/regista/regista-create/regista-create.component';
import { RegistaListComponent } from './features/regista/regista-list/regista-list.component';
import { FilmDetailComponent } from './features/film/film-detail/film-detail.component';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'regista',
    loadChildren: () => import('./features/regista/regista.module').then(m => m.RegistaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'film',
    loadChildren: () => import('./features/film/film.module').then(m => m.FilmModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
