import { Component, OnInit } from '@angular/core';
import { CalificacionService } from '../calificacion.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public calificacionService: CalificacionService,
    private router: Router
  ) { }

  ngOnInit(): void {

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
    this.calificacionService.create(this.form.value).subscribe(res => {
         console.log('calificacion created successfully!');
         this.router.navigateByUrl('calificaciones/index');
    })
  }

}

