import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService,private router:Router) {}
  logout():void{
    this.authService.logout();
    this.router.navigate(['/'])
  }
  }
// Now you can call the methods from AuthService
// checkLogin(): boolean {
// return this.authService.isLoggedIn();
// }


// logoutUser(): void {
// this.authService.logout();
// }
  // constructor(private authService: AuthService, private router: Router) {
  //   if (!this.authService.isLoggedIn()) {
  //     alert('Please login first!');
  //     this.router.navigate(['/login']);
  //   }
  // }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

