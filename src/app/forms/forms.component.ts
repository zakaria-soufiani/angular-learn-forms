import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

  constructor() { }

  ngOnInit() {
  }

}
