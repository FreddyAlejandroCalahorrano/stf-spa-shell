import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../auth/services/login.service";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit{

  isClosed: boolean = false
  maxWidthToCloseSidebar: number = 750

  constructor(private router: Router,
              private loginService: LoginService) {
  }
  ngOnInit() {
    this.isClosed = window.innerWidth <= this.maxWidthToCloseSidebar;
  }

  onClickToggle(isClosed: boolean) {
    this.isClosed = isClosed
  }

  get fullName(){
    return this.loginService.fullName
  }

  get closeSidebar() {
    return this.isClosed
  }

  logout(){
    this.loginService.logout()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isClosed = window.innerWidth <= this.maxWidthToCloseSidebar;
  }

}
