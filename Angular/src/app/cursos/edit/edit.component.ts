import { Component, OnInit } from '@angular/core';

import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Curso } from '../curso';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  curso: Curso;
  form: FormGroup;

  constructor(
    public cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCurso'];
    this.cursoService.find(this.id).subscribe((data: Curso)=>{
      this.curso = data;
    });

    this.form = new FormGroup({
      Curso:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890-_ \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.cursoService.update(this.id, this.form.value).subscribe(res => {
         console.log('curso updated successfully!');
         this.router.navigateByUrl('cursos/index');
    })
  }

}


