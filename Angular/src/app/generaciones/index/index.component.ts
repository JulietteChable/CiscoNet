import { Component, OnInit } from '@angular/core';

import { GeneracionService } from '../generacion.service';
import { Generacion } from '../generacion';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  generacions: Generacion[] = [];

  // constructor() { }
  constructor(public generacionService: GeneracionService) { }

  ngOnInit(): void {
    this.generacionService.getAll().subscribe((data: Generacion[])=>{
      this.generacions = data;
      console.log(this.generacions);
    })
  }

  deleteGeneracion(id){
    this.generacionService.delete(id).subscribe(res => {
         this.generacions = this.generacions.filter(item => item.id !== id);
         console.log('generacions deleted successfully!');
    })
  }

}

