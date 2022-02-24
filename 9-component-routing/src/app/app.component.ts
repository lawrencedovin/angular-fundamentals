import { Component } from '@angular/core';
import { Nav } from './interfaces/nav.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav: Array<Nav> = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
  ]
}
