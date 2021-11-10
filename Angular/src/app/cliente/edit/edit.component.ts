import { Component, OnInit } from '@angular/core';

import { AlumnoService } from '../alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  alumno: Alumno;
  form: FormGroup;

  constructor(
    public alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAlumno'];
    this.alumnoService.find(this.id).subscribe((data: Alumno)=>{
      this.alumno = data;
    });

    this.form = new FormGroup({
      Matricula: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890 \-\']+') ]),
      Nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Apellido:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.alumnoService.update(this.id, this.form.value).subscribe(res => {
         console.log('cliente updated successfully!');
         this.router.navigateByUrl('cliente/index');
    })
  }

}
