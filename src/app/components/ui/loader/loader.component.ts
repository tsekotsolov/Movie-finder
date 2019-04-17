import { Component } from '@angular/core';
import { LoadingService } from '@services';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent  {

  isLoading: boolean;

  constructor(private loadingService: LoadingService) {
    this.loadingService.emitLoading.subscribe((isLoading: boolean) => this.isLoading = isLoading);
  }

}
