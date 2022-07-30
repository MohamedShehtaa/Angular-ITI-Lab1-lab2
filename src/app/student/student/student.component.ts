import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = new Student(1, "moahmed", 26, 1);
  constructor() { }

  ngOnInit(): void {
  }
  handelInputs(v1: string, v2: string, v3: string, v4: string) {
    this.student = new Student(+v1, v2, +v3, +v4);

  }

}
