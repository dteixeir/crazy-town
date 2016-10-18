import { Component, Input } from '@angular/core';
import { UserLite } from '../../models/userLite/user-lite';

@Component({
  selector: 'app-table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent {
  private _headers = [];
  private _records = [];
  private hasRecords = false;

  constructor() { }

  @Input() set headers(headers: string[]){
    this._headers = headers;
  }

  @Input() set records(records: UserLite[]){
    this._records = records;
    this.hasRecords = true;
  }

  getRecords() {
    return this._records;
  }
}
