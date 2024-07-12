import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { TranslateService } from '@ngx-translate/core';
// import { MessageDialogComponent } from '@shared/@components/@dialogs/message-dialog/message-dialog.component';

export type MessageNotifyActions = "success" | "warning" | "danger" | "info"

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private _translate = inject(TranslateService)
  private _snackBar = inject(MatSnackBar)

  showSuccess(message?: string, title?: string) {
    // if (!title) title = this._translate.instant('messages.success.title');
    // if (!message) message = this._translate.instant('messages.success.desc');
    return this._notify("success", title!, message!);
  }

  showError(message?: string, title?: string) {
    // if (!title) title = this._translate.instant('messages.failed.title');
    // if (!message) message = this._translate.instant('messages.failed.desc');
    return this._notify("warning", title!, message!);
  }

  showWarning(message: string, title?: string) {

    // if (!title) title = this._translate.instant('messages.warning.title');

    return this._notify("info", title!, message);
  }


  private _notify(action: MessageNotifyActions, title: string, message: string) {
    let config: MatSnackBarConfig = {}

    switch (action) {
      case "success": {
        config = {
          panelClass: ['message-success']
        }
        break;
      }
      case "warning": {
        config = {
          panelClass: ['message-warning']
        }
        break;
      }
      case "info": {
        config = {
          panelClass: ['message-info']
        }
        break;
      }
    }

    // return this._snackBar.openFromComponent(MessageDialogComponent, {
    //   data: {
    //     title,
    //     message,
    //     action,
    //   },
    //   horizontalPosition: 'right',
    //   verticalPosition: 'bottom',
    //   ...config,
    //   duration: 4000
    // })
  }
}
