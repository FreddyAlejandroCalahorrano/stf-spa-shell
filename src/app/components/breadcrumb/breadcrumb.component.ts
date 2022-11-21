import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {SidebarService} from "../../services/sidebar.service";
import {SidebarItem} from "@interfaces/sidebar.interface";
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public navigation: any;
  breadcrumbList: Array<any> = [];
  public navigationList: Array<any> = [];

  constructor(private route: Router,
              public nav: SidebarService,
              private titleService: Title) {

    this.setBreadcrumb()
  }

  async ngOnInit() {
    let routerUrl: string = this.route.url;
    this.navigation = this.nav.getMenuFilters();
    if (routerUrl) {
      this.filterNavigation(routerUrl);
    }
  }

  setBreadcrumb() {
    let routerUrl: string;
    this.route.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe((router: any) => {
        routerUrl = router.urlAfterRedirects;
        console.log(routerUrl)
        if (routerUrl) {
          this.breadcrumbList.length = 0;
          const activeLink = router.url;
          this.filterNavigation(activeLink);
        }
      });
  }

  filterNavigation(activeLink: string) {
    let result: any[] = [];
    let title = 'Bienvenido';
    if (this.navigation) {
      this.navigation.forEach((a: SidebarItem) => {
        if (a.type === 'item' && 'url' in a && a.url === activeLink) {
          result = [
            {
              url: ('url' in a) ? a.url : false,
              title: a.title,
              breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
              type: a.type
            }
          ];
          title = a.title;
        } else {
          if (['item', 'collapse'].includes(a.type) && 'children' in a) {

            a.children?.forEach((b) => {
              if (b.type === 'item' && 'url' in b && activeLink.startsWith(b.url)) {
                result = [
                  {
                    url: ('url' in a) ? a.url : false,
                    title: a.title,
                    breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
                    type: a.type
                  },
                  {
                    url: ('url' in b) ? b.url : false,
                    title: b.title,
                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                    type: b.type
                  }
                ];
                title = b.title;
              }
              /*else {
                if (c.type === 'collapse' && 'children' in c) {
                  // console.log(b.title)
                  c.children?.forEach((d) => {
                    if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                      result = [
                        {
                          url: ('url' in b) ? b.url : false,
                          title: b.title,
                          breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                          type: b.type
                        },
                        {
                          url: ('url' in c) ? c.url : false,
                          title: c.title,
                          breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                          type: c.type
                        },
                        {
                          url: ('url' in d) ? d.url : false,
                          title: d.title,
                          breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
                          type: d.type
                        }
                      ];
                      title = d.title;
                    }
                  });
                }
              }*/
            });
          }

          /*if (a.type === 'group' && 'children' in a) {
            a.children?.forEach((b) => {
              if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                result = [
                  {
                    url: ('url' in b) ? b.url : false,
                    title: b.title,
                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                    type: b.type
                  }
                ];
                title = b.title;
              } else {

              }
            });
          }*/
        }
      });
    }
    this.navigationList = [...result];
    this.titleService.setTitle(title + ' | Admin');
  }

}
