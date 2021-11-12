import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'generaciones', redirectTo: 'generaciones/index', pathMatch: 'full'},
  { path: 'generaciones/index', component: IndexComponent },
  { path: 'generaciones/create', component: CreateComponent },
  { path: 'generaciones/edit/:idGeneracion', component: EditComponent }
];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneracionesRoutingModule { }
