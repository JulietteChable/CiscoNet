import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'catalogo1', redirectTo: 'catalogo1/index', pathMatch: 'full'},
  { path: 'catalogo1/index', component: IndexComponent },
  { path: 'catalogo1/create', component: CreateComponent },
  { path: 'catalogo1/edit/:idCatalogo1', component: EditComponent } 
];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Catalogo1RoutingModule { }
