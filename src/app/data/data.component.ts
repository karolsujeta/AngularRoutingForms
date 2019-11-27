import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { zip } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  todos=[
    {
      firstname: 'Edek',
      lastname: 'Zgredek',
      zip: '111111',
      email: 'edekzgredek@gmail.com',
      sex: 'mężczyzna'
    }
  ];

  addTodo(newParametr1, newParametr2, newParametr3, newParametr4, newParametr5 ){
    var newTodo={
      firstname: newParametr1,
      lastname: newParametr2,
      zip: newParametr3,
      email: newParametr4,
      sex: newParametr5
    }
    this.todos.push(newTodo);
  }


  constructor() { }

  ngOnInit() {
  }

}
