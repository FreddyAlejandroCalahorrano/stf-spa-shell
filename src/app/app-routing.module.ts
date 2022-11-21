import {NgModule} from '@angular/core';
import {PreloadAllModules, Routes} from '@angular/router';
import {LoaderConfigurationFederated, LoaderFederationModule} from '@pichincha/angular-sdk/module-federation';

/**
 * Layouts
 */
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
/**
 * Guard
 */
import {EmptyComponent} from './components/empty/empty.component';
import {environment} from "@environments/environment";
import {LoggedGuard} from "./auth/guards/logged.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [
      LoggedGuard
      // MsalGuard
    ]
  },
  /**
   * Path reserver for msal redirect
   * not erase o modify
   */
  {
    path: 'state',
    canActivate: [LoggedGuard],
    component: EmptyComponent
  },
  {
    // Only Hash TRUE
    path: 'code',
    redirectTo: ''
  }
];
const location = window.location.origin;

const configuration: LoaderConfigurationFederated = {
  remoteConfigurationUrl: location + environment.microApps,
  extra: {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
  },
  layouts: [
    {
      component: DashboardLayoutComponent,
      name: 'dashboard',
      onEnterRoute: [LoggedGuard]
    }
  ]
}

@NgModule({
  imports: [LoaderFederationModule.forRoot(routes, configuration)],
  exports: [LoaderFederationModule]
})
export class AppRoutingModule {
}
