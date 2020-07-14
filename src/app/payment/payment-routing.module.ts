import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentEntryComponent } from './payment-entry/payment-entry.component';

const routes: Routes = [
    { path: '', component: PaymentComponent, children: [
        {path: 'executed', component: PaymentListComponent},
        {path: 'future', component: PaymentListComponent},
        {path: 'entry', component: PaymentEntryComponent}
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PaymentRoutingModule {}
