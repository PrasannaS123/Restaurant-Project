import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { HeadingService } from '../shared/heading.service';

import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  router: any;
 
  constructor(private headingService: HeadingService) { }

  
  updatePageTitle(title: string) {
    this.headingService.setPageTitle(title);
  }



}
