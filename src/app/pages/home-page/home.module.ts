import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { UsersComponent } from 'src/app/pages/home-page/components/users/users.component';
import { UserItemComponent } from 'src/app/pages/home-page/components/user-item/user-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent, UsersComponent, UserItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: []
})
export class HomeModule {}
