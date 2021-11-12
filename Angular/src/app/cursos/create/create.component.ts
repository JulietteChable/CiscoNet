import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
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
    public  cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      Curso:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890-_ \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.cursoService.create(this.form.value).subscribe(res => {
         console.log('curso created successfully!');
         this.router.navigateByUrl('cursos/index');
    })
  }

}
