import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


@Injectable({
  providedIn: 'root'
})

export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
