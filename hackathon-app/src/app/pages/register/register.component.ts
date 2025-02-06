import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports:[FormsModule,CommonModule],
  selector: 'app-register',
  standalone:true,
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      return;
    }

    this.authService.register(this.email, this.password).subscribe({
      next: (res: any) => {
        this.message = res.message;
      },
      error: (err) => {
        this.message = err.error.message || 'Registration failed';
      }
    });
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormsModule,NgForm } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';


// @Component({
//   selector: 'app-register',
//   imports:[FormsModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   name = '';
//   email = '';
//   password = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   register() {
//     this.authService.register(this.name, this.email, this.password);
//     alert('Registration successful! Please login.');
//     this.router.navigate(['/login']);
//   }
// }

