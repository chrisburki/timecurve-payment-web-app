import { Injectable } from '@angular/core';
import { Account } from './account.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
    accountList: Account[] = [
        { id: 'acc1', iban: 'CH1234455666', amount: 10000, currency: 'CHF', description: 'Main Accounnt' },
        { id: 'acc1', iban: 'CH1234455667', amount: 10000, currency: 'CHF', description: 'Saving Accounnt' },
        { id: 'acc1', iban: 'CH1234455668', amount: 10000, currency: 'CHF', description: 'Investment Accounnt' },
        { id: 'acc1', iban: 'DE1234455669', amount: 10000, currency: 'EUR', description: 'Europe Accounnt' },
        { id: 'acc1', iban: 'US1234455610', amount: 10000, currency: 'USD', description: 'US Accounnt' },
    ];

    getAccountList() {
        return this.accountList.slice();
    }
}
