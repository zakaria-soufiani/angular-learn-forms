import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {DatabaseService} from "../services/database.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers:[DatabaseService]
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
