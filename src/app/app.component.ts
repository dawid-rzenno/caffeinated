import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainComponent } from "./core/layout/main/main.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { AuthModule } from "./core/auth/auth.module";
import { BreadcrumbsComponent } from "./core/navigation/breadcrumbs/breadcrumbs.component";
import { SideNavComponent } from "./core/navigation/side-nav/side-nav.component";

@Component({
  selector: 'cortado-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
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
