import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule, MatSnackBarModule, MatStepperModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {NotFoundComponent} from './not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {QuickAccessComponent} from './quick-access/quick-access.component';
import {QuickAccessButtonComponent} from './quick-access/quick-access-button/quick-access-button.component';
import {MessageBoxComponent} from './message-box/message-box.component';
import {CardServerStatusComponent} from './dashboard/card-server-status/card-server-status.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {BaseCardComponent} from './statistics/base-card/base-card.component';
import {AddCardBottomSheetComponent} from './statistics/add-card-bottom-sheet/add-card-bottom-sheet.component';
import {AddServerGroupStatsComponent} from './statistics/add-server-group-stats/add-server-group-stats.component';
import {AuthInterceptor} from './auth-interceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    QuickAccessComponent,
    QuickAccessButtonComponent,
    MessageBoxComponent,
    CardServerStatusComponent,
    LoginComponent,
    RegisterComponent,
    StatisticsComponent,
    BaseCardComponent,
    AddCardBottomSheetComponent,
    AddServerGroupStatsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddCardBottomSheetComponent, AddServerGroupStatsComponent]
})
// @ts-ignore
export class AppModule {
}
