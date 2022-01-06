import { Component, OnInit } from '@angular/core';

import { AlumnoService } from '../alumno.service';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-liscalifi',
  templateUrl: './liscalifi.component.html',
  styleUrls: ['./liscalifi.component.css']
})
export class LiscalifiComponent implements OnInit {

  alumnos: Alumno[] = [];

  // constructor() { }
  constructor(public alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAll().subscribe((data: Alumno[])=>{
      this.alumnos = data;
      console.log(this.alumnos);
    })
  }

  deleteAlumno(id){
    this.alumnoService.delete(id).subscribe(res => {
         this.alumnos = this.alumnos.filter(item => item.id !== id);
         console.log('Alumno deleted successfully!');
    })
  }

}
