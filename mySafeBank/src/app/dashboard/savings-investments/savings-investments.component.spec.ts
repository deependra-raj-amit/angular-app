import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsInvestmentsComponent } from './savings-investments.component';

describe('SavingsInvestmentsComponent', () => {
  let component: SavingsInvestmentsComponent;
  let fixture: ComponentFixture<SavingsInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsInvestmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
