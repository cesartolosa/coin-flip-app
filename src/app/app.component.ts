import { Component } from '@angular/core';
import { randomNumber } from './functions';

@Component({
  selector: 'ctf-coin-flip-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: string | number = '';
  
  generate(n: string) {
    try {
      this.result = randomNumber(parseFloat(n));
    } catch (error) {
      this.result = error;
    }
  }

}
