import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header.component";
import { MainComponent } from "./core/layout/main/main.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { AuthModule } from "./core/auth/auth.module";
import { BreadcrumbsComponent } from "./core/layout/breadcrumbs/breadcrumbs.component";
import { SideNavComponent } from "./core/layout/side-nav/side-nav.component";

@Component({
  selector: 'cortado-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AuthModule,
    BreadcrumbsComponent,
    SideNavComponent
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cortado';
}
