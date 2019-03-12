import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SearchService {
  private navItemSource = new BehaviorSubject<string>(null);
  navItem = this.navItemSource.asObservable();

  passQuery(query: string) {
    this.navItemSource.next(query);
  }
}
