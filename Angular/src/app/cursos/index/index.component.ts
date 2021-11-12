import { Component, OnInit } from '@angular/core';

import { CursoService } from '../curso.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cursos: Curso[] = [];

  // constructor() { }
  constructor(public cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getAll().subscribe((data: Curso[])=>{
      this.cursos = data;
      console.log(this.cursos);
    })
  }

  deletePerson(id){
    this.cursoService.delete(id).subscribe(res => {
         this.cursos = this.cursos.filter(item => item.id !== id);
         console.log('Curso deleted successfully!');
    })
  }

}
