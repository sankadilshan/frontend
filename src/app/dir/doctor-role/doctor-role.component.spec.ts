import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRoleComponent } from './doctor-role.component';

describe('DoctorRoleComponent', () => {
  let component: DoctorRoleComponent;
  let fixture: ComponentFixture<DoctorRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
