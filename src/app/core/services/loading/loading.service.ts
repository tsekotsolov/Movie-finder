import { Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class LoadingService  {
  constructor(
  ) {}

  emitLoading: EventEmitter<boolean> = new EventEmitter();

  loading = () => {
    return this.emitLoading;
  }
}
