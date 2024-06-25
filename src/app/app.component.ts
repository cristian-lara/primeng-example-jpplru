import { Component, Input, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


export class MenuListComponent {

  @ContentChild(TemplateRef) contentTemplateRef: TemplateRef<any>;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  text: string;

  results: string[]

  constructor(private fb: FormBuilder) {

  }

  search(event) {
    this.results = ['aashish', 'ajay', 'Rama', 'Pidi'];
  }

}
