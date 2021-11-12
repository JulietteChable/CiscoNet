import { Component, OnInit } from '@angular/core';

import { CalificacionService } from '../calificacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  calificacion: Calificacion;
  form: FormGroup;

  constructor(
    public calificacionService: CalificacionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCalificacion'];
    this.calificacionService.find(this.id).subscribe((data: Calificacion)=>{
      this.calificacion = data;
    });

    this.form = new FormGroup({
      Nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Modulo1: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890. \-\']+') ]),
      Modulo2: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890. \-\']+') ]),
      Final: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890. \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.calificacionService.update(this.id, this.form.value).subscribe(res => {
         console.log('Person updated successfully!');
         this.router.navigateByUrl('calificaciones/index');
    })
  }

}

