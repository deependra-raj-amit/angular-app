import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCreditsComponent } from './loans-credits.component';

describe('LoansCreditsComponent', () => {
  let component: LoansCreditsComponent;
  let fixture: ComponentFixture<LoansCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansCreditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
