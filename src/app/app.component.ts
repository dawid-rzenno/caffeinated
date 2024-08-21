import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header.component";
import { MainComponent } from "./core/layout/main/main.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { AuthModule } from "./core/auth/auth.module";

@Component({
  selector: 'cortado-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AuthModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness';
}
