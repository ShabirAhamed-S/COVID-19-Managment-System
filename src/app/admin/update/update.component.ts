import { Component, OnInit } from '@angular/core';

import { Hero } from '../../model/hero';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  model = new Hero(18, 'shabir', "adfaga@gmail.com", '53, Mission street, tirupur','tirupur', 'TamilNadu', '654536', 'Positive', 'Female');

  constructor() { }

  ngOnInit(): void {
  }

}
