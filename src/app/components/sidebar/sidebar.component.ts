import {Component, EventEmitter, Input, Output, ViewEncapsulation,} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {SidebarItem} from "../../types/sidebar.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  sidebarItems: SidebarItem[];

  @Input() closeSidebar: boolean = false
  @Input() isDarkMode: boolean = false

  @Output() toggleEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private sidebarService: SidebarService,) {
    this.sidebarItems = [
      ...sidebarService.getMenuFilters()
    ]
  }

  onClickToggle() {
    this.closeSidebar = !this.closeSidebar
    this.toggleEventEmitter.emit(this.closeSidebar)
  }

  get sidebarItemsFilter() {
    return this.sidebarItems
  }

}
