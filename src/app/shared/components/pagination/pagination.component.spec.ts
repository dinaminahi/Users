import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let currentPage: number;
  let pageNum: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    pageNum = 10;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create pages', async(() => {
    currentPage = 1;
    component.currentPage = currentPage;
    component.pageNumber = pageNum;
    component.setupPagination();
    const page = document.getElementById(currentPage.toString());
    expect(page).toBeTruthy();
    expect(page.textContent).toBe(currentPage.toString());
  }));

  it('return page num when clicked', () => {
    currentPage = 1;
    component.currentPage = currentPage;
    component.pageNumber = pageNum;
    component.setupPagination();
    const page = document.getElementById(currentPage.toString());
    component.userClick.subscribe((clickedPage: number) => expect(clickedPage).toBe(currentPage));
    page.click();
  });
});
