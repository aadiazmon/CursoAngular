import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieTableComponent } from './countrie-table.component';

describe('CountrieTableComponent', () => {
  let component: CountrieTableComponent;
  let fixture: ComponentFixture<CountrieTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrieTableComponent]
    });
    fixture = TestBed.createComponent(CountrieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
