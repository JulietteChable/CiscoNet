import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'cursos', redirectTo: 'cursos/index', pathMatch: 'full'},
  { path: 'cursos/index', component: IndexComponent },
  { path: 'cursos/create', component: CreateComponent },
  { path: 'cursos/edit/:idCurso', component: EditComponent }
];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
