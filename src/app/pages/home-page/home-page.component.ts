import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Users } from 'src/app/shared/models/users.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public data$: Observable<Users>;
  public page = 1;
  constructor(private facadeService: FacadeService) {}

  ngOnInit(): void {
    this.makeParamCall(this.page.toString());
  }

  public onPageChange(newPage: number): void {
    this.page = newPage;
    this.makeParamCall(newPage.toString());
  }

  public makeParamCall(params: string): void {
    this.facadeService.getHome(params);
    this.data$ = this.facadeService.getHomeAll();
  }
}
