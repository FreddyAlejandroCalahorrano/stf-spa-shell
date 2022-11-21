import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {environment} from "../../environments/environment";

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {
  }

  canActivate(): boolean {
    this.router.navigate([environment.mainPath]);
    return true;
  }

}
