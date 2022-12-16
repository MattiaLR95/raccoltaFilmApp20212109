import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: FilmListComponent
  },
  {
    path: 'create',
    component: FilmCreateComponent
  },
  {
    path: ':id',
    component: FilmDetailComponent
  },
  {
    path: '',
    component: FilmListComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    FilmCreateComponent,
    FilmListComponent,
    FilmDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class FilmModule { }
