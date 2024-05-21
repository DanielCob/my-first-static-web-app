import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hola {{value}}</div>`,
})
export class AppComponent {
  value = 'mundo loco';
}
