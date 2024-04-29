import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'navbar';
}

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    // Vos composants
  ],
  imports: [
    BrowserModule,
    MatToolbarModule, // Importez MatToolbarModule ici
    // Autres modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

