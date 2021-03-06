import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CalifiComponent } from './califi/califi.component';
import { LiscalifiComponent } from './liscalifi/liscalifi.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent, CalifiComponent, LiscalifiComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
