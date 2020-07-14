import { NgModule } from '@angular/core';
import { BookingComponent } from './booking.component';
import { SharedModule } from '../shared/shared.module';
import { BookingRoutingModule } from './booking-rounting.module';

@NgModule({
    declarations: [
        BookingComponent
    ],
    imports: [
        SharedModule,
        BookingRoutingModule
    ]
})
export class BookingModule {}
