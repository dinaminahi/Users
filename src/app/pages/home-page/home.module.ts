import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLazyModule } from 'src/app/shared/shared-lazy/shared-lazy.module';
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';

import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { UsersComponent } from 'src/app/pages/home-page/components/users/users.component';
import { UserItemComponent } from 'src/app/pages/home-page/components/user-item/user-item.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent, UsersComponent, UserItemComponent, PaginationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedLazyModule, ButtonsModule, CardsModule, IconsModule],
  exports: []
})
export class HomeModule {}
