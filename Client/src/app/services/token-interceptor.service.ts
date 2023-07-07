import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req: any, next: any){
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()} ${authService.getUsername()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
