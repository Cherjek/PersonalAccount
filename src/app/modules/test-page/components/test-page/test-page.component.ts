import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pa-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  control = new FormControl();
  passwordControl = new FormControl();
  mailControl = new FormControl();
  phoneControl = new FormControl();
  items = [
    {
      Id: 1,
      Name: 'Hello',
      IsChecked: true,
    },
    {
      Id: 2,
      Name: 'Hello2',
    },
    {
      Id: 3,
      Name: 'Cool',
    },
  ];
  data = ['abc', 'abcd', 'abcde'];
  data2 = [1, 2, 3, 4, 5, 99, 999, 92];
  constructor() {}

  ngOnInit() {}

  checked(data: any): void {
    console.log(data);
  }

  onSelect(data: any, event: any) {
    console.log({ data, event });
  }

  buttonTest(event: any, type: any) {
    console.log({event, type});
  }
}
