import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-emp-dialog',
  templateUrl: './emp-dialog.component.html',
  styleUrls: ['./emp-dialog.component.scss'],
})
export class EmpDialogComponent {
  empForm: FormGroup;
  Position: string[] = [
    'Back-End Dev',
    'Front-End Dev',
    'Full-Stack Dev',
    'Data-Analyst',
    'Database Admin',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<EmpDialogComponent>
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      position: '',
    });
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('New employee added successfully!');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
