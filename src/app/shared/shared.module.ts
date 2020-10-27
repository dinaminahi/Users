import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [PaginationComponent],
  imports: [HttpClientModule, CommonModule, ButtonsModule, CardsModule, IconsModule],
  exports: [CommonModule, PaginationComponent, ButtonsModule, CardsModule, IconsModule]
})
export class SharedModule {}
