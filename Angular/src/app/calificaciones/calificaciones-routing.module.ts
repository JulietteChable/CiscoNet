import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'calificaciones', redirectTo: 'calificaciones/index', pathMatch: 'full'},
  { path: 'calificaciones/index', component: IndexComponent },
  { path: 'calificaciones/create', component: CreateComponent },
  { path: 'calificaciones/edit/:idCalificacion', component: EditComponent }
];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalificacionesRoutingModule { }
