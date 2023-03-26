import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showSidebar(){
    document.querySelector('body')?.classList.toggle('toggle-sidebar')
  }
}
