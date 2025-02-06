import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,RouterModule,HomeComponent,LoginComponent,RegisterComponent,DashboardComponent,AboutComponent,ContactComponent,FaqComponent,TermsComponent,NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackathon-app';
}
