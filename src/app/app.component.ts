import { Component } from '@angular/core';
import { Address } from 'src/app/shared/models/address';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp04_tritschberger_antoine';


  getLocalAddresses(): Address[] {
    const localAddresses = localStorage.getItem('addresses');
    if (localAddresses) {
      return JSON.parse(localAddresses);
    }
    return [];
  }
}
