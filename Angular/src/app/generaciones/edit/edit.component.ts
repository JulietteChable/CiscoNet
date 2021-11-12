import { Component, OnInit } from '@angular/core';

import { GeneracionService } from '../generacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Generacion } from '../generacion';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  generacion: Generacion;
  form: FormGroup;

  constructor(
    public generacionService: GeneracionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idGeneracion'];
    this.generacionService.find(this.id).subscribe((data: Generacion)=>{
      this.generacion = data;
    });

    this.form = new FormGroup({
      Generacion:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890-_ \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.generacionService.update(this.id, this.form.value).subscribe(res => {
         console.log('generacion updated successfully!');
         this.router.navigateByUrl('generaciones/index');
    })
  }

}

