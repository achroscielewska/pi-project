import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineBankComponent } from './medicine-bank.component';

describe('MedicineBankComponent', () => {
  let component: MedicineBankComponent;
  let fixture: ComponentFixture<MedicineBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
