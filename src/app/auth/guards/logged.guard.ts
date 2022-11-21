import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {MsalService} from '@azure/msal-angular';
import {StorageService} from '@pichincha/angular-sdk/storage';
import {environment} from "@environments/environment";
import {LoginService} from "../services/login.service";

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(
    private auth: MsalService,
    private router: Router,
    private storage: StorageService,
    private loginService: LoginService,) {
  }

  async canActivate(): Promise<boolean> {
    try {
      const tokenResponse = await this.auth.handleRedirectObservable().toPromise();
      if (!tokenResponse) {

        const accounts = this.auth.instance.getAllAccounts();
        const token = this.storage.get(environment.authProvider.accessTokenName);
        if (accounts.length === 0 || !token) {
          await this.auth.loginRedirect().toPromise();
          return false;
        }
        return true;
      } else {
        const {account} = tokenResponse
        this.storage.set(environment.authProvider.accessTokenName, tokenResponse.idToken);
        this.storage.set(environment.authProvider.profile_mail, account?.username);
        return true;
      }
    } catch (e) {
    }
    return false;
  }
}
