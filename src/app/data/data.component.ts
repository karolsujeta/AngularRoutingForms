import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  title: 'karakan';
  todos=[
    {
      firstname: 'Edek',
      lastname: 'Zgredek',
      zip: '111111',
      email: 'edekzgredek@gmail.com',
      sex: 'mężczyzna'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
