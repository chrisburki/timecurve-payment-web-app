import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountList: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountList = this.accountService.getAccountList();
  }

  onSubmitAccount() {
    console.log('modify account');
  }

}
