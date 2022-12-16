import { SharedModule } from './../../shared/shared.module';
import { DecodificaSessoPipe } from './../../shared/pipes/decodifica-sesso.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistaCreateComponent } from './regista-create/regista-create.component';
import { RegistaListComponent } from './regista-list/regista-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes=[
  {
    path: 'list',
    component: RegistaListComponent
  },
  {
    path: 'create',
    component: RegistaCreateComponent
  },
  {
    path: 'update/:id',
    component: RegistaCreateComponent
  },
  {
    path: '',
    component: RegistaListComponent,
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [
    RegistaListComponent,
    RegistaCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class RegistaModule { }
