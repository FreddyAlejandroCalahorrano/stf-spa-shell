import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpInterceptorRequest, HttpModule} from '@pichincha/angular-sdk/http';
import {StorageModule} from '@pichincha/angular-sdk/storage';
import {EStorageType} from '@pichincha/typescript-sdk';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  InternationalizationService,
  TRANSLATE_CONFIG,
  TRANSLATE_CONFIG_STORAGE
} from '@pichincha/bb-commons/internationalization';
import {
  setAuthorization,
  INTERCEPTOR_CONFIG_STORAGE,
  restartTimer,
  ITimerEvents,
  INTERCEPTOR_TIMER_EVENTS
} from '@pichincha/bb-commons/interceptor';

/**
 * Components
 */
import {AppComponent} from './app.component';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';

/**
 * Guard
 */
import {LoggedGuard} from './guard/logged.guard';
import {EmptyComponent} from './components/empty/empty.component';
import {environment} from 'src/environments/environment';
import {InternationalizationModule} from './internationalization/internationalization.module';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AuthModule} from "./auth/auth.module";
import {TopComponent} from "./components/top-header/top.component";
import { NavItemComponent } from './components/sidebar/nav-item/nav-item.component';
import { NavCollapseComponent } from './components/sidebar/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './components/sidebar/nav-group/nav-group.component';
import {BreadcrumbModule} from "./components/breadcrumb/breadcrumb.module";

const configStorage = {storageType: EStorageType.SESSION, secretKey: environment.storage.key};

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    EmptyComponent,
    SidebarComponent,
    FooterComponent,
    TopComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent,
  ],
  imports: [
    InternationalizationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    BreadcrumbModule,
    StorageModule.forRoot(configStorage),
    HttpModule.forRoot({api_url: environment.apiUrl}),
  ],
  providers: [
    LoggedGuard,
    {
      provide: HttpInterceptorRequest,
      useValue: setAuthorization
    },
    {
      provide: TRANSLATE_CONFIG,
      useValue: {
        availableLanguages: ['es', 'en'],
        defaultLanguage: 'es',
        urlAssets: environment.translationFiles
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
