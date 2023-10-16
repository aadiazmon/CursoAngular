import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriePageComponent } from './countrie-page.component';

describe('CountriePageComponent', () => {
  let component: CountriePageComponent;
  let fixture: ComponentFixture<CountriePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriePageComponent]
    });
    fixture = TestBed.createComponent(CountriePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
