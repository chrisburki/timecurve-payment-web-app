import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.gurad';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
//    { path: 'booking', loadChildren: './booking/booking.module#BookingModule', canLoad: [AuthGuard] },
    { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canLoad: [AuthGuard] },
//    { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule), canLoad: [AuthGuard] },
    { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule), canLoad: [AuthGuard] }
/*     { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard], children: [
        {path: 'executed', component: PaymentListComponent},
        {path: 'future', component: PaymentListComponent},
        {path: 'entry', component: PaymentEntryComponent}
    ] } */
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
