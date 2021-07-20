import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  model = new Hero(18, 'shabir', "adfaga@gmail.com", '53, Mission street, tirupur','tirupur', 'TamilNadu', '654536','Positive','Male');

  constructor() { }

  ngOnInit(): void {
  }

}
