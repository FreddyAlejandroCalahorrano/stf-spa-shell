import {Component, Input} from '@angular/core';
import {SidebarItem} from "@interfaces/sidebar.interface";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {

  @Input() item!: SidebarItem;

  constructor() {
  }

}
