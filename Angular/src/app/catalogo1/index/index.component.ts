import { Component, OnInit } from '@angular/core';
import { GeneracionService } from '../generacion.service';
import { Generacion } from '../generacion';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  generaciones: Generacion[] = [];

  // constructor() { }
  constructor(public generacionService: GeneracionService) { }

  ngOnInit(): void {
    this.generacionService.getAll().subscribe((data: Generacion[])=>{
      this.generaciones = data;
      console.log(this.generaciones);
    })
  }

  deletePerson(id){
    this.generacionService.delete(id).subscribe(res => {
         this.generaciones = this.generaciones.filter(item => item.id !== id);
         console.log('Generacion deleted successfully!');
    })
  }

}
