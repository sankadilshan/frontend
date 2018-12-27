import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersregisterdComponent } from './usersregisterd.component';

describe('UsersregisterdComponent', () => {
  let component: UsersregisterdComponent;
  let fixture: ComponentFixture<UsersregisterdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersregisterdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersregisterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
