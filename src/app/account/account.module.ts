import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    declarations: [
        AccountComponent
    ],
    imports: [
        SharedModule,
        AccountRoutingModule
    ]
})
export class AccountModule { }
