import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CalifiComponent } from './califi/califi.component';
import { LiscalifiComponent } from './liscalifi/liscalifi.component';

const routes: Routes = [
  { path: 'cliente', redirectTo: 'cliente/index', pathMatch: 'full'},
  { path: 'cliente', redirectTo: 'cliente/liscalifi', pathMatch: 'full'},
  { path: 'cliente/index', component: IndexComponent },
  { path: 'cliente/liscalifi', component: LiscalifiComponent },
  { path: 'cliente/create', component: CreateComponent },
  { path: 'cliente/edit/:idAlumno', component: EditComponent },
  { path: 'cliente/califi/:idAlumno', component: CalifiComponent }

];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
