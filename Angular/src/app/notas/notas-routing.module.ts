import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'notas', redirectTo: 'notas/index', pathMatch: 'full'},
  { path: 'notas/index', component: IndexComponent },
  { path: 'notas/create', component: CreateComponent },
  { path: 'notas/edit/:idNotas', component: EditComponent } 
];

/.../



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
