import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsuccessPageComponent } from './accountsuccess-page.component';

describe('AccountsuccessPageComponent', () => {
  let component: AccountsuccessPageComponent;
  let fixture: ComponentFixture<AccountsuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsuccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
