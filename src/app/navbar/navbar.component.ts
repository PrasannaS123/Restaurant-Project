import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HeadingService } from '../shared/heading.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  pageTitle!: string;
  activeChildTitle: string = '';

  showAddUserBreadcrumb: boolean = false;
  showEditUserBreadcrumb: boolean = false;
  showViewUserBreadcrumb: boolean = false;
  showPasswordBreadcrumb: boolean = false;


  constructor(private headingService: HeadingService, private router: Router, private route: ActivatedRoute) { }

  updatePageTitle(title: string) {
    this.headingService.setPageTitle(title);
  }


  ngOnInit() {
    const storedActiveChildTitle = localStorage.getItem('activeChildTitle');
    if (storedActiveChildTitle) {
      this.activeChildTitle = storedActiveChildTitle;
    }
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data && data['title']) {
          this.activeChildTitle = data['title'];
          localStorage.setItem('activeChildTitle', this.activeChildTitle);
        } else {
          this.activeChildTitle = '';
          localStorage.removeItem('activeChildTitle');
        }
      });

    this.headingService.pageTitle$.subscribe(title => {
      this.pageTitle = title;
    });


    this.headingService.getShowAddUserBreadcrumb().subscribe((value) => {
      this.showAddUserBreadcrumb = value;
    });

    this.headingService.getShowEditUserBreadcrumb().subscribe((value) => {
      this.showEditUserBreadcrumb = value;
    });

    this.headingService.getShowViewUserBreadcrumb().subscribe((value) => {
      this.showViewUserBreadcrumb = value;
    });

    this.headingService.getPasswordBreadcrumb().subscribe((value) => {
      this.showPasswordBreadcrumb = value;
    });


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showAddUserBreadcrumb = this.router.url.includes('adduser');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showEditUserBreadcrumb = this.router.url.includes('edituser');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showViewUserBreadcrumb = this.router.url.includes('viewuser');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showPasswordBreadcrumb = this.router.url.includes('changePassword');
      }
    });

  }

  isDashboardOrProfile(): boolean {
    return !(this.pageTitle === 'Dashboard' || this.pageTitle === 'Profile');
  }

 getBreadcrumbUrl(): string {
  return this.isDashboardOrProfile()? 
    
  'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor" /%3E%3C/svg%3E\')' : 'a';
}






}
