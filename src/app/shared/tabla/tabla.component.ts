import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  titulo:string="Tabla de ejemplo"

  datos:any[] = [
    { nombre: 'Ana', edad: 28, ciudad: 'Madrid' },
    { nombre: 'Carlos', edad: 35, ciudad: 'Barcelona' },
    { nombre: 'Lucía', edad: 22, ciudad: 'Valencia' },
    { nombre: 'Javier', edad: 40, ciudad: 'Sevilla' }
  ];

}
