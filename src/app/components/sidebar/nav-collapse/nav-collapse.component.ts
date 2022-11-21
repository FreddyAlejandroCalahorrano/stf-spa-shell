import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SidebarItem} from "@interfaces/sidebar.interface";

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavCollapseComponent {
  public visible!: boolean;
  @Input() item!: SidebarItem;

  constructor() {
    this.visible = false;
  }

  navCollapse(e: any) {
    this.visible = !this.visible
  }

}
