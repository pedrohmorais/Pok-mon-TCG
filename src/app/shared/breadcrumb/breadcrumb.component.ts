import { Component, Input } from '@angular/core';

export interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'pkm-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent {
  @Input() breadCrumbs: BreadCrumb[] = [];

  isLastItem(i): boolean {
    return i < this.breadCrumbs.length - 1;
  }

  constructor() { }
}
