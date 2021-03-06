import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
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
    public alumnoService: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      Generacion:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890-_ \-\']+') ]),
      Matricula: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890 \-\']+') ]),
      Nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Apellido:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Status:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890 \-\']+') ]),
      Curso:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890-_ \-\']+') ])

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form);
    console.log(this.form.value);
    this.alumnoService.create(this.form.value).subscribe(res => {
         console.log('cliente created successfully!');
         this.router.navigateByUrl('cliente/index');
    })
  }

}

