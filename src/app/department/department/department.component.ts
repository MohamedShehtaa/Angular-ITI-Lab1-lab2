import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public department: Department = new Department(1, "it", "mansoura");
  constructor() {

  }

  ngOnInit(): void {
  }
  editInputs(v1: string, v2: string, v3: string) {
    this.department.id = +v1;
    this.department.deptName = v2;
    this.department.location = v3;

  }
  handelInputs(v1: string, v2: string, v3: string) {
    this.department = new Department(+v1, v2, v3);

  }
}
