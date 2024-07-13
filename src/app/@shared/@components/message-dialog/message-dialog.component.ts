import { Direction } from '@angular/cdk/bidi';
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { MessageNotifyActions } from '@shared/@services/messages/message.service';
import { SystemService } from '@shared/@services/system/system.service';


interface MessageDialogData {
  message: string;
  title: string;
  action: MessageNotifyActions
}

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {
  constructor(
    public sbRef: MatSnackBarRef<MessageDialogComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: MessageDialogData,
    private _systemService: SystemService
  ) { }


  get direction(): Direction {
    return this._systemService.direction;
  }

  close() {
    this.sbRef.dismiss();
  }
}
