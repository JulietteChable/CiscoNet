import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Catalogo1RoutingModule } from './catalogo1-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    Catalogo1RoutingModule
  ]
})
export class Catalogo1Module { }
