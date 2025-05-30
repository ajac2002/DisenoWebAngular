import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shazed/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
