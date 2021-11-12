import { Component, OnInit } from '@angular/core';

import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  calificacions: Calificacion[] = [];

  // constructor() { }
  constructor(public calificacionService: CalificacionService) { }

  ngOnInit(): void {
    this.calificacionService.getAll().subscribe((data: Calificacion[])=>{
      this.calificacions = data;
      console.log(this.calificacions);
    })
  }

  deletePerson(id){
    this.calificacionService.delete(id).subscribe(res => {
         this.calificacions = this.calificacions.filter(item => item.id !== id);
         console.log('calificacion deleted successfully!');
    })
  }

}
