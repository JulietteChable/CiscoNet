import { Component, OnInit } from '@angular/core';

import { NotasService } from '../notas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Notas } from '../notas';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  notas: Notas;
  form: FormGroup;
  
  constructor(
    public notasService: NotasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idNotas'];
    this.notasService.find(this.id).subscribe((data: Notas)=>{
      this.notas = data;
    });

    this.form = new FormGroup({
      Nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Curso1: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890. \-\']+') ]),
      Curso2: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890. \-\']+') ]),
      Promedio: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ1234567890. \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.notasService.update(this.id, this.form.value).subscribe(res => {
         console.log('Notas updated successfully!');
         this.router.navigateByUrl('notas/index');
    })
  }


}
