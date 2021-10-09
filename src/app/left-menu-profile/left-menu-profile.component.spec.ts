import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuProfileComponent } from './left-menu-profile.component';

describe('LeftMenuProfileComponent', () => {
  let component: LeftMenuProfileComponent;
  let fixture: ComponentFixture<LeftMenuProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
