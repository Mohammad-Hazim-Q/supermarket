import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-wrapper',
  templateUrl: './category-wrapper.component.html',
  styleUrls: ['./category-wrapper.component.scss']
})
export class CategoryWrapperComponent {

  @Input({ required: true }) title!: string;


}
