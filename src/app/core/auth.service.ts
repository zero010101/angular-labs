import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {
    private accesToken: string;
    private readonly tokenEndpoint = `https://pnit-lessons.azurewebsites.net/api/Token`;
    private readonly tokenStorageKey = 'accessToken';

  get isLoggedIn(): boolean {
    return !!this.accesToken;
  }

  constructor(private httpClient: HttpClient,
              private router: Router) {
                this.loadToken();
  }



  logout() {
    localStorage.removeItem(this.tokenStorageKey);
    this.accesToken = null;
    this.router.navigate(['/login']);
  }

  getUserRole(): string {
    const jwtService = new JwtHelperService();
    const decodedToken = jwtService.decodeToken(this.accesToken);

    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

  private saveToken(accessToken: string) {
    localStorage.setItem(this.tokenStorageKey, accessToken);
  }
  private loadToken() {
   this.accesToken =  localStorage.getItem(this.tokenStorageKey);
  }
}
