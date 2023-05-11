import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-emp-dialog',
  templateUrl: './emp-dialog.component.html',
  styleUrls: ['./emp-dialog.component.scss'],
})
export class EmpDialogComponent implements OnInit {
  empForm: FormGroup;
  Position: string[] = [
    'Back-End Dev',
    'Front-End Dev',
    'Full-Stack Dev',
    'Data-Analyst',
    'Database Admin',
  ];
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Employee updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('New employee added successfully!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
  handleClose() {
    this._dialogRef.close(false);
  }
}
