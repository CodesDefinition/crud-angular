import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-dialog',
  templateUrl: './emp-dialog.component.html',
  styleUrls: ['./emp-dialog.component.scss'],
})
export class EmpDialogComponent {
  Position: string[] = [
    'Back-End Dev',
    'Front-End Dev',
    'Full-Stack Dev',
    'Data-Analyst',
    'Database Admin',
  ];
}
