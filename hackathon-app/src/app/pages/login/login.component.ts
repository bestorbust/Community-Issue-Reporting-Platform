import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  standalone:true,
  selector: 'app-login',
  imports:[FormsModule,CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        this.message = res.message;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.message = err.error.message || 'Login failed';
      }
    });
  }
}
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { FormsModule,NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-login',
//   imports:[FormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email = '';
//   password = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     if (this.authService.login(this.email, this.password)) {
//       this.router.navigate(['/dashboard']);
//     } else {
//       alert('Invalid Credentials');
//     }
//   }
// }
