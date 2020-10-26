import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePage } from 'src/app/pages/home-page/homePage.model';
import { FacadeService } from 'src/app/services/facade/facade.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public HomePage: Observable<HomePage>;
  public page = 1;
  constructor(private facadeService: FacadeService) {}

  ngOnInit(): void {
    const params = {
      page: this.page.toString()
    };
    this.makeFilterCall(params);
  }

  public onPageChange(newPage: number): void {
    this.page = newPage;
    const params = {
      page: newPage.toString()
    };
    this.makeFilterCall(params);
  }

  public makeFilterCall(params: { page: string }): void {
    this.facadeService.getHome(params);
    this.HomePage = this.facadeService.getHomeAll();
  }
}
