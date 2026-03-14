import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  showdata = false;
  cars = [
    { name: 'BMW', year: 2010 },
    { name: 'Audi', year: 2012 },
    { name: 'Mercedes', year: 2015 },
  ];
  jour: number = 1;
}
