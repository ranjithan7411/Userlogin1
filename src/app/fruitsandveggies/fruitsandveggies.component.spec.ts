import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsandveggiesComponent } from './fruitsandveggies.component';

describe('FruitsandveggiesComponent', () => {
  let component: FruitsandveggiesComponent;
  let fixture: ComponentFixture<FruitsandveggiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsandveggiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsandveggiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
