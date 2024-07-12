import { Component, Input, inject } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-right-drawer-container',
  templateUrl: './right-drawer-container.component.html',
  styleUrls: ['./right-drawer-container.component.scss']
})
export class RightDrawerContainerComponent {

  @Input({ required: true }) title!: string;

  private _layoutService = inject(LayoutService);

  close() {
    this._layoutService.toggleRightDrawer();
  }

}
