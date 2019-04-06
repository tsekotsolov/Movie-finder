import { Injectable, EventEmitter} from '@angular/core';



@Injectable()
export class LoadingService  {
  constructor(
  ) {}

  emitLoading: EventEmitter<any> = new EventEmitter();

  loading = () => {
    return this.emitLoading;
  }
}
