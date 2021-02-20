import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  myForm: FormGroup;
  dataFake = [
    {
      value: 'level_1',
      checked: true
    },
    {
      value: 'level_2',
      checked: false
    },
    {
      value: 'level_3',
      checked: false
    }
  ]

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

  sendDataLevel() {
    let me = this;
    const dataCheckBox = me.dataValidate(me.dataFake);
    console.log(dataCheckBox)
    if (dataCheckBox.length == 0) {
      console.log('checkbox invalid');
      return;
    }
    console.log('data checbox', { data: dataCheckBox[0] });
  }

  changeCheckbox(event, checked) {
    let me = this;
    me.dataFake = me.clearValueCheckBoxTrue(me.dataFake);
    me.dataFake = me.dataFake.map((e) => {
      if (e.value == event.target.id) {
        return { value: e.value, checked }
      } else {
        return { value: e.value, checked: false }
      }
    });
    console.log(event.target.id, me.dataFake)
  }

  clearValueCheckBoxTrue(data: any[]) {
    let me = this;
    const newArrary = [];
    data.map((e) => {
      return newArrary.push({ value: e.value, checked: false });
    });
    return newArrary;
  }

  dataValidate(data: any[]) {
    const newArrary = [];
    data.filter((e) => e.checked).forEach((e) => {
      newArrary.push(e.value)
    });
    return newArrary
  }


}
