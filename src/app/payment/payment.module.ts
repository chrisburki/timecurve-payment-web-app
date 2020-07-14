import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { PaymentEntryComponent } from './payment-entry/payment-entry.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
    declarations: [
        PaymentComponent,
        PaymentEntryComponent,
        PaymentListComponent
    ],
    imports: [
        SharedModule,
        PaymentRoutingModule
    ]
})
export class PaymentModule { }
