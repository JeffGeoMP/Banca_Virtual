import { Component, OnInit } from '@angular/core';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Transaccion, Usuario } from 'src/app/models/Task';
import { ConectionService } from 'src/app/services/conection.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  id_usuario:Number = 3;
  nombre_usuario: String = "Roberto";
  transacciones: Transaccion[];

  constructor(private conectionService: ConectionService) { }

  ngOnInit(): void {
    this.iniciar_variables();
    this.obtener_transacciones();
  }

  //Generar consulatas para obtener los datos
  obtener_transacciones(){
    this.conectionService.getTransacciones(this.id_usuario).subscribe((data:Transaccion[])=>{
      this.transacciones = data;
    }, error => {   
      console.log("Error al obtener datos");
      console.log(error);
    });
  }    

  //obtener usuario
  iniciar_variables(){
    let result:Usuario = JSON.parse(localStorage.getItem('Usuario'));
    this.id_usuario = result.id_cuenta;
    this.nombre_usuario = `${result.nombres} ${result.apellidos}`;
    this.transacciones = [];
  }

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('data');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      doc.text(`Transacciones de ${this.nombre_usuario}`, 50, 25);
      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 40;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}${this.id_usuario}.pdf`);
    });
    return "pdf descargado";
  }


}
