import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/.../

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'certificado', redirectTo: 'certificado/index', pathMatch: 'full'},
  { path: 'certificado/index', component: IndexComponent },
  { path: 'certificado/create', component: CreateComponent },
  { path: 'certificado/edit/:idCertificado', component: EditComponent } 
];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificadoRoutingModule { }
