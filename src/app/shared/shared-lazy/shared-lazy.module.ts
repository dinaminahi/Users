import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, RouterModule.forChild([])],
  exports: [CommonModule],
  providers: []
})
export class SharedLazyModule {}
