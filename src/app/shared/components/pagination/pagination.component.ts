import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

interface PageModel {
  text?: string;
  id?: string;
  class?: string;
  listener?: object;
  display?: string;
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public pages: number;
  public current: number;
  public pagesObjects = [];

  @Input() set pageNumber(pageNumber: number) {
    this.pages = pageNumber;
  }
  @Input() set currentPage(currentPage: number) {
    this.current = currentPage;
  }
  @Output() public userClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnInit() {
    this.setupPagination();
  }

  public setupPagination(): void {
    for (let i = 1; i < this.pages + 1; i++) {
      const item: PageModel = this.createPaginationItem(i);
      this.pagesObjects.push(item);
    }
  }

  public createPaginationItem(page: number): PageModel {
    const item = {} as PageModel;
    item.text = page.toString();
    item.id = page.toString();
    if (this.current === page) {
      item.class = `pages-current`;
    }
    item.listener = () => {
      this.current = page;
      this.userClick.emit(page);
      this.makeNewCurrent(item);
    };
    return item;
  }

  public makeNewCurrent(item: PageModel): void {
    this.pagesObjects.forEach((el) => {
      if (el.id === item.id) {
        el.class = 'pages-current';
      } else {
        el.class = '';
      }
    });
  }
}
