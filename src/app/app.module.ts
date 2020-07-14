import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthModule } from './auth/auth.module';
// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth.gurad';
// import { UiService } from './shared/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AuthModule
  ],
  // old: providers: [AuthService, AuthGuard, UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
