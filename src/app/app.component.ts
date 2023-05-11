import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpDialogComponent } from './emp-dialog/emp-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud-demo';
  constructor(private _dialog: MatDialog) {}
  openDialog() {
    this._dialog.open(EmpDialogComponent);
  }
}
