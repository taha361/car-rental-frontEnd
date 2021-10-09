import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMenuProfileComponent } from './info-menu-profile.component';

describe('InfoMenuProfileComponent', () => {
  let component: InfoMenuProfileComponent;
  let fixture: ComponentFixture<InfoMenuProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMenuProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMenuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
