import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from './shared/shared-lazy/shared.module';
import { RootStoreModule } from 'src/app/core/store/root-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, AppRoutingModule, RootStoreModule, MDBBootstrapModule.forRoot()],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
