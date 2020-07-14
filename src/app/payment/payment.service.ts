import { Payment } from './payment.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaymentService {
    executedPayments: Payment[] = [
        { id: 'pay1', iban: 'CH1234455666', amount: 200, currency: 'CHF', text: 'First Payment', valueDate: new Date() },
        { id: 'pay2', iban: 'CH1234455777', amount: 2300, currency: 'CHF', text: 'BUC', valueDate: new Date() },
        { id: 'pay3', iban: 'CH1234455888', amount: 2200.35, currency: 'CHF', text: 'Next Payment', valueDate: new Date() },
        { id: 'pay4', iban: 'CH1234455999', amount: 200.15, currency: 'EUR', text: 'Last Payment', valueDate: new Date() },
    ];

    getExecutedPayments() {
        return this.executedPayments.slice();
    }
}
