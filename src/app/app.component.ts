import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shazed/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
import { Component } from '@angular/core';
import { Foto } from './interfaz/foto';
import { RecursosService} from './servicio/recursos.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, TablaComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    })
  }
}
