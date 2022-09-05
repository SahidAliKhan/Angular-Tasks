import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.css']
})
export class Ps4Component implements OnInit {
  title = 'Movies List';
  users=["Hitman","Nova","Schindler's List"];

  constructor() { }

  ngOnInit(): void {
  }

}
