import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  myForm: FormGroup;


  constructor() { 
    
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Benedict'),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }


  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

}
