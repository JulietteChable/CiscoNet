import { Component, OnInit } from '@angular/core';

import { NotasService } from '../notas.service';
import { Notas } from '../notas';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  notas: Notas[] = [];

  // constructor() { }
  constructor(public notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getAll().subscribe((data: Notas[])=>{
      this.notas = data;
      console.log(this.notas);
    })
  }

  deleteNota(id){
    this.notasService.delete(id).subscribe(res => {
         this.notas = this.notas.filter(item => item.id !== id);
         console.log('Notas deleted successfully!');
    })
  }


}
