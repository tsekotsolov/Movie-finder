import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class NotificationsService {

  constructor(
    private toastr: ToastrService
    ) {}

    showSuccess(message: string) {
      this.toastr.success(message);
    }

    showFailure(message: string) {
      this.toastr.error(message);
    }
}
