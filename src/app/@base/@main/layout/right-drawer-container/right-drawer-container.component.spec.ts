import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDrawerContainerComponent } from './right-drawer-container.component';

describe('RightDrawerContainerComponent', () => {
  let component: RightDrawerContainerComponent;
  let fixture: ComponentFixture<RightDrawerContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightDrawerContainerComponent]
    });
    fixture = TestBed.createComponent(RightDrawerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
