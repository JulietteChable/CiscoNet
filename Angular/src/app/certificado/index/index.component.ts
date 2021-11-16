import { Component, OnInit } from '@angular/core';

import { CertificadoService } from '../certificado.service';
import { Certificado } from '../certificado';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  certificados: Certificado[] = [];

  // constructor() { }
  constructor(public certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificadoService.getAll().subscribe((data: Certificado[])=>{
      this.certificados = data;
      console.log(this.certificados);
    })
  }

  deleteCertificado(id){
    this.certificadoService.delete(id).subscribe(res => {
         this.certificados = this.certificados.filter(item => item.id !== id);
         console.log('calificacion deleted successfully!');
    })
  }

}